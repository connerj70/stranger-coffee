SELECT * from matches 
join users on users.id = matches.user1_id or users.id = matches.user2_id
where date_part('day', age(date, current_date)) < 3;