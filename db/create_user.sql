insert into users(username, name, auth_id, profile_pic, email)
values($1, $2, $3, $4, $5)
RETURNING *;