require("dotenv").config();
// const bcrypt = require("bcryptjs");
const { DATABASE_CONFIG } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_CONFIG, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
module.exports = {
  register: (req, res) => {
    const { email, password } = req.body;
        sequelize.query(`select * from users where email = '${email}'`)
            .then((dbRes) => {
      res.status(200).send(dbRes[0]);
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");

    const [foundUser] = await db.users.check_user({ email });
    if (!foundUser) {
      return res
        .status(401)
        .send("Account not found.Try a different email or register");
    }

    const authenticated = bcrypt.compareSync(password, foundUser.password);
    if (!authenticated) {
      res.status(403).send("Incorrect password");
    }
    delete foundUser.password;
    req.session.user = foundUser;
    // console.log(req.session.user)
    res.status(202).send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
