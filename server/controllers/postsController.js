require("dotenv").config();

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
  getPosts: (req, res) => {
    sequelize
      .query(
        ``
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      });
  },
};

// export const getPosts = (req, res) => {
//   const q = `select p.*, u.id as userId, name, profilePicture from posts as p join users as u on (u.id = p.userId)`;
// };

// module.exports = {
//   register: (req, res) => {
//     const { email, password } = req.body;
//         sequelize.query("select * from users where email = ?")
//             .then(dbRes => {
//                 if (!dbRes[0][0]) {

//                     return res.status(400).send('Email is already in use, try login')
//                 } else {
//                     const salt = bcrypt.genSaltSync(10);
//                     const hashedPassword = bcrypt.hashSync(password, salt)

//                     const q = "insert into users (`username`, `email`, `password`, `name`) value (?)"
//                     const values = [
//                         req.body.username,
//                         req.body.email,
//                         hashedPassword,
//                         req.body.name,
//                     ];
//                     sequelize.query(q, [values]).then(dbRes => {
//                         const userToSend = [...dbRes[0]]

//                         return res.status(500).send(userToSend)

//                     }).catch(err => console.log(err))
//                 }
//             }
//             )}

//             }
