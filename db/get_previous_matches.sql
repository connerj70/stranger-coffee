select * from previous_matches 
left join matches on previous_matches.match_id = matches.match_id
where previous_matches.user1_id = $1 or previous_matches.user2_id = $1;