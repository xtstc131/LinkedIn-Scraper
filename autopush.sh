#!/bin/sh
DATE_N=`/bin/date "+%Y-%m-%d %H:%M:%S"`
/usr/local/bin/node linkedin_fulltime_scraper.js
# /usr/local/bin/node linkedin_intern_scraper.js


/usr/local/bin/git add .
/usr/local/bin/git commit -m "${DATE_N} Update"

/usr/local/bin/git push origin master

echo "Done"
exit 0