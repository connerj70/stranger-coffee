UPDATE reviews SET image_urls = image_urls || Array[$1]
where review_id = $2;