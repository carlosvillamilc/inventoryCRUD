--CREATE TABLES

create table estado(
id_estado	SERIAL primary key,
estado		VARCHAR(10)
);

CREATE TABLE producto (
  id_producto              SERIAL PRIMARY KEY,
  nombre_producto           VARCHAR(100) NOT NULL,
  id_estado					INTEGER not null,
  CONSTRAINT fk_estado  
  FOREIGN KEY(id_estado) 
  REFERENCES estado(id_estado) 
);

CREATE TABLE articulo (
	id_articulo				SERIAL PRIMARY KEY,
	id_producto				integer not null,
    nombre_articulo			VARCHAR(100) NOT NULL,
	descripcion_articulo	VARCHAR(100) NOT NULL,
	serial_articulo			VARCHAR(100) NOT NULL,
	precio_articulo			INTEGER NOT NULL,
    id_estado 				INTEGER NOT null,
    CONSTRAINT fk_estado FOREIGN KEY(id_estado) REFERENCES estado(id_estado),
    CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES producto(id_producto)
);

create table cantidad_producto (
	id_articulo				integer,
	cantidad_disponible		integer,
	constraint fk_articulo foreign key (id_articulo) references articulo(id_articulo)
);


--Data Test
insert into estado (estado) values ('activo'),('inactivo');

insert into producto (nombre_producto, id_estado) values ('Gafas Formula', 1), ('Gafas Sol', 1)

insert into articulo 
(id_producto ,nombre_articulo, descripcion_articulo , serial_articulo , precio_articulo , id_estado ) 
values (1,'Gafas Bifocales', 'Lentes Bifocales','gaf_bifo_001',100000,1),
(1,'Gafas Progesivas', 'Lentes Progesivo','gaf_prog_001',100000,1),
(1,'Gafas Progesivas', 'Lentes Progesivo Marca xxxx','gaf_prog_002',150000,1),
(2,'Gafas Sol 1', 'Lentes de Sol','gaf_sol_001',500000,1),
(2,'Gafas Sol 2', 'Lentes de Sol Marca xxxx','gaf_sol_002',200000,1);

--drop table estado cascade;
--drop table Producto cascade;
--drop table articulo cascade;
--drop table cantidad_producto cascade;