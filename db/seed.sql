create table users (
    user_id serial primary key,
    first_name varchar(55),
    last_name varchar(55),
    email varchar(155),
    password varchar(255),
    city varchar(55),
    state varchar(55),
);
create table comments (
    product_id serial primary key,
    product_name varchar(55),
    price numeric,
    product_img text,
    category varchar(55),
    description varchar(255),
);