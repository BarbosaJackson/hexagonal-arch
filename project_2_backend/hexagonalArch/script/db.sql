-- create extension if not exists "uuid-ossp"

create table user (
    id uuid PRIMARY KEY,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);