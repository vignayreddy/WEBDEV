create table user(
    id VARCHAR(50) primary key,
    username varchar(50) unique,
    email VARCHAR(50) unique not null,
    password VARCHAR(50) not null
);
show tables;
select * from user;