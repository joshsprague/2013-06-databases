CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (

username varchar(20), message varchar(160), room varchar(10), time datetime

);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
