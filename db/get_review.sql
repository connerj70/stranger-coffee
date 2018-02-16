select * from reviews
join users on users.id = reviews.reviewer_id
where review_id = $1;