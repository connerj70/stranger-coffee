select * from matches 
join users on users.id = matches.user2_id
where user1_id = $1 or user2_id = $1
order by creation_time desc limit 1;