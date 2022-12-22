
create table users (
    user_id serial primary key,
    username varchar(55),
    email varchar(155),
    password varchar(255),
    name varchar(255),
    coverPic varchar(255),
    profilePic varchar(255)
);
drop table if exists posts;
create table posts (
    post_id serial primary key,
    description varchar(255),
    image varchar(255),
    user_id int references users(user_id) on update cascade on delete cascade,
    createdAt timestamp without time zone
);

drop table if exists comments;
create table comments (
   comment_id serial primary key,
   description varchar(255),
    user_id int references users(user_id) on update cascade on delete cascade,
    post_id int references posts(post_id) on update cascade on delete cascade,
    createdAt timestamp without time zone
);

create table stories (
    img varchar(255),
   user_id int references users(user_id)
   
);
create table followers (
  follower_id serial primary key,
    followerUserId int references users(user_id) on update cascade on delete cascade,
    followedUserId int references users(user_id) on update cascade on delete cascade
);

create table likes (
    likes_id serial primary key,
    user_id int references users(user_id) on update cascade on delete cascade,
    post_id int references posts(post_id) on update cascade on delete cascade
);

insert into users(username, email, name, password, coverPic, profilePic)
values('AdamSendler', 'sendler@gmail.com', 'Adam', '123456', 'img.jpg', 'image.gpg'),
('JuanaMoore', 'moore@gmail.com', 'Juana', '764683', 'img.jpg', 'image.gpg'),
('DuaneHood', 'duane@gmail.com', 'Duane', '87874', 'img.jpg', 'image.gpg'),
('Napoleon', 'dawson@gmail.com', 'Napoleon', '34355', 'img.jpg', 'image.gpg'),
('Jarred', 'jarred@gmail.com', 'Jarred', '123456', 'img.jpg', 'image.gpg'),
('fakename', 'kelvin@gmail.com', 'Santos', '12233', 'img.jpg', 'image.gpg'),
('Yolanda', 'yolanda@gmail.com', 'Yolanda', '56656', 'img.jpg', 'image.gpg'),
('ErnaSummers', 'ernasum@gmail.com', 'Erna', '1676756', 'img.jpg', 'image.gpg'),
('CarlaSmith', 'carlas@gmail.com', 'Carla', '967564', 'img.jpg', 'image.gpg'),
('Jessica', 'jess@gmail.com', 'Jessica', '6788', 'img.jpg', 'image.gpg')
;

-- insert into posts(description, image)