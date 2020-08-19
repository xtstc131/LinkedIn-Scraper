#!/bin/sh
DATE_N=`/bin/date "+%Y-%m-%d %H:%M:%S"`
/usr/local/bin/node index.js

/usr/local/bin/git add .
/usr/local/bin/git commit -m "${DATE_N} Update"

/usr/local/bin/git push

echo "Done"
exit 0