 insert into previous_matches(previous_user1_id, previoous_user2_id, match_id, reviewed)
 values($2,$3, $1, false);
 delete from matches where match_id = $1;
