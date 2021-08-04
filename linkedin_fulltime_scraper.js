const {
  LinkedinScraper,
  relevanceFilter,
  timeFilter,
  typeFilter,
  experienceLevelFilter,
  events
} = require("linkedin-jobs-scraper");

(async () => {
  // Programatically disable logger
  setTimeout(() => LinkedinScraper.disableLogger(), 5000);

  // Each scraper instance is associated with one browser.
  // Concurrent queries will be runned on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 100 // used to be 10
  });

  var res = {
    table: []
  };

  // Listen for custom events
  scraper.on(
    events.scraper.data,
    ({
      query,
      location,
      link,
      title,
      company,
      place,
      date,
      // description,
      senorityLevel,
      jobFunction,
      employmentType,
      industries
    }) => {
      res.table.push({
        query: query,
        location: location,
        title: title,
        company: company,
        place: place,
        date: date,
        // description: description,
        link: link,
        senorityLevel: senorityLevel,
        function: jobFunction,
        employmentType: employmentType,
        industries: industries
      });
    }
  );

  scraper.on(events.scraper.error, err => {
    console.error(err);
  });
  scraper.on(events.scraper.end, () => {
    console.log("All done!");
    let fs = require("fs");
    let time = '{"time" : ' + '"' + new Date().toLocaleString() + '",';
    fs.writeFile(
      "src/linkedin_fulltime_output.json",
      time + '"data" : ' + JSON.stringify(res.table) + "}",
      "utf8",
      () => {}
    );
  });

  // Listen for puppeteer specific browser events
  scraper.on(events.puppeteer.browser.targetcreated, () => {});
  scraper.on(events.puppeteer.browser.targetchanged, () => {});
  scraper.on(events.puppeteer.browser.targetdestroyed, () => {});
  scraper.on(events.puppeteer.browser.disconnected, () => {});

  // This will be executed on browser side
  const descriptionProcessor = () =>
    document
      .querySelector(".description__text")
      .innerText.replace(/[\s\n\r]+/g, " ")
      .trim();

  // Run queries concurrently
  await Promise.all([
    scraper.run([
      {
        query: "Software Engineer New Grad",
        options: {
          locations: ["Canada"], // This will be merged with the global options => ["United States", "Europe"]
          filters: {
            type: [typeFilter.FULL_TIME]
          }
        }
      }
    ])
  ]);

  // Close browser
  await scraper.close();
})();
