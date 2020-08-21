# LinkedIn Spider

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flinkedin-spider.netlify.app)](https://hits.seeyoufarm.com)

This is a platform supporting the latest free software engineer job information for the new graduates.
The keywords includes software grad, entry Software, Software university, Software graduate, Software college, junior developer, will be used for LinkedIn job search.

Temporarily supported by a hard-working [LinkedIn scraper](https://www.npmjs.com/package/linkedin-jobs-scraper), which works 996 and never sleep.
**Only for self study purpose. No commercial usage allowed**

## Demo

The demo is deployed on [Netlify](https://www.netlify.com)

![Screenshot](./demo.png)
[Try it here](https://linkedin-spider.netlify.app)

Note that the column can be `sortable`. Nimbly to use `search` for better filtering.

## Usage

To configure your system for development, first install Node.js and npm and
then run `npm install`. This will install some dependencies using npm. The Environment
I use is `Node 12.18.1` and `npm 6.14.5`.

To display the website, run `npm start`. Then visit `localhost:3000` as default. To run the
scraper, simply run `node linkedin_xxx_scraper.js` (xxx can be intern or fulltime), and wait for 2 minutes until page reloading.  Or you can run 'autopush.sh' shell script which runs scraper and pushes to github.

You can also set a cron job using `crontab` command line tool:

Use `crontab -e` to add new job, then add cron schedule expression:

```bash
crontab -e
#schedule expression
0 8-20 * * * cd path/to/your/repo && ./autopush.sh
```

This expression means run script at minute 0 every hour from 8am. to 8pm.

## Todos

- spider server
- Differences in contrast
- push service
