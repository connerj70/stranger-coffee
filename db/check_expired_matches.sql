select * from matches where date_part('day',age(date, creation_time)) < 1
