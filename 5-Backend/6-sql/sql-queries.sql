create database kuldeep;

create database if not exists kj;
drop database if exists kj;

create database xyz;
drop database xyz;
 
use kuldeep;

create table student (
	roll_no int, 
    name varchar(20),
    age int
);

insert into student values (101, "adam", 14),(102, "eve", 15);

select * from student;

show databases;

show tables;

create table user(
	id int,
    age int,
    name varchar(30) not null,
    email varchar(50) unique,
    followers int default 0,
    following int,
    constraint check (age >= 13),
    primary key (id)
);

create table post (
	id int primary key,
    content varchar(100),
    user_id int,
    foreign key (user_id) references user(id)
);

insert into user
(id, age, name, email, followers, following )
values
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);


select id, name, age from user;

select * from user;

select distinct age from user;

insert into post 
(id, content, user_id)
values
(1,"hello",3),
(2,"world",4),
(3,"hiii",2);

select * from post;
