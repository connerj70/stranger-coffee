select * from notifications 
join users on users.id = notifications.user_id
where user_id = $1