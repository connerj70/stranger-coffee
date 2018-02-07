insert into reviews(reviewer_id, reviewee_id, review, stars)
values($1,$2,$3,$4)
RETURNING *;