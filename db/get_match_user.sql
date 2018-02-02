select * from users
where lower(city) = $1 and id != $2;