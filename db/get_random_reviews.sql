select * from reviews 
join users  on users.id = reviews.reviewer_id
order by random() limit 6;