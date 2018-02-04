insert into matches(user1_id, user2_id, location, location_name, creation_time, date, pending)
values($1, $2, $3, $4, $5, $6, $7)
RETURNING *;