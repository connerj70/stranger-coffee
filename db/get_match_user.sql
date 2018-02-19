select * from users
where lower(city) = $1 and id != $2 and id not in (select user2_id from matches) and id not in (select user1_id from matches)