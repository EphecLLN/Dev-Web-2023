create database prototype;

create table riders(
	id int auto_increment,
	name varchar,
	familyName varchar,
	lessonCredits,

	primary key(id)
);

create table payments(
	id int auto_increment,
	idRider int,
	paymentDate date,

	primary key(id),
	foreign key(idRider) references riders(riderId)
);