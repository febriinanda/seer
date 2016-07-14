
CREATE TABLE gender (
                id_gender INT AUTO_INCREMENT NOT NULL,
                name VARCHAR(32) NOT NULL,
                status INT NOT NULL,
                create_date DATE,
                update_date DATE,
                PRIMARY KEY (id_gender)
);


CREATE TABLE religion (
                id_religion INT AUTO_INCREMENT NOT NULL,
                name VARCHAR(32) NOT NULL,
                status INT NOT NULL,
                create_date DATE,
                update_date DATE,
                PRIMARY KEY (id_religion)
);


CREATE TABLE people (
                id_people INT AUTO_INCREMENT NOT NULL,
                fullname VARCHAR(32) NOT NULL,
                nickname VARCHAR(32) NOT NULL,
                id_religion INT NOT NULL,
                id_gender INT NOT NULL,
                status INT NOT NULL,
                create_date DATE,
                update_date DATE,
                PRIMARY KEY (id_people)
);


CREATE TABLE feed (
                id_feed INT AUTO_INCREMENT NOT NULL,
                id_people INT NOT NULL,
                notes TEXT NOT NULL,
                status INT NOT NULL,
                create_date DATE,
                update_date DATE,
                PRIMARY KEY (id_feed)
);


CREATE TABLE rating (
                id_rating INT AUTO_INCREMENT NOT NULL,
                id_people INT NOT NULL,
                value INT NOT NULL,
                notes TEXT NOT NULL,
                create_date DATE,
                update_date DATE,
                PRIMARY KEY (id_rating)
);


ALTER TABLE people ADD CONSTRAINT gender_people_fk
FOREIGN KEY (id_gender)
REFERENCES gender (id_gender)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE people ADD CONSTRAINT religion_people_fk
FOREIGN KEY (id_religion)
REFERENCES religion (id_religion)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE rating ADD CONSTRAINT people_rating_fk
FOREIGN KEY (id_people)
REFERENCES people (id_people)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE feed ADD CONSTRAINT people_feed_fk
FOREIGN KEY (id_people)
REFERENCES people (id_people)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
