select * from notifications 
join users on users.id = notifications.user2_id
where user1_id = $1 or user2_id = $1;