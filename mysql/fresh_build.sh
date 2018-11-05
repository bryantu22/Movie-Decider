mysql <<MYSQL_INPUT
	DROP DATABASE movie_decider;
	CREATE DATABASE movie_decider;
	USE movie_decider;
	SOURCE schema.mysql;
MYSQL_INPUT
 
mysql > db_descript.txt <<MYSQL_INPUT
	USE movie_decider;
        SHOW TABLES;
MYSQL_INPUT

mysql >> db_descript.txt <<MYSQL_INPUT
        USE movie_decider;
        DESCRIBE actors;
        DESCRIBE cardinality;
        DESCRIBE movies;
        DESCRIBE prev_suggest;
        DESCRIBE sets;
        DESCRIBE suggest;
        DESCRIBE users;
MYSQL_INPUT
