<h1>CareerDevs Finance Agile Week</h1>
<p>Get your own AlphaAdvantage api key at <a href="https://www.alphavantage.co/">Alpha Advantage</a></p>

mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/nyse.csv
mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/nasdaq.csv
mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/amex.csv

__Notes:__

To get the app to run I had to do the following steps on cloud 9
1. npm install
2. install mongodb from https://community.c9.io/t/setting-up-mongodb/1717
   
    sudo apt-get install -y mongodb-org
3. chmod a+x mongod  // to make it executable
4. run ./mongod in one terminal tab
5. in another terminal tab run node app.js  // CDFinance is running on port 8080 
6. open browser to https://meanfinance-YOUR_USER_NAME.c9users.io
7. installed nodemon - will restart server after making changes
8. going forward, we do NOT have to do all these steps, just
   *  run ./mongod in one terminal
   *  run nodemon in another terminal
   *  point your browser to https://meanfinance-code42.c9users.io



__A few things I noticed:__

1. README.md is misspelled REACME.md so I changed it
2. README.md needs md formatting, not &lt;html&gt;
3. missing file css/custom.css  // needed to move logo down  
4. CDFinance database has 6756 stocks in it already, no need to import from .csv
5. Deposit Funds page says Find Stocks - easily changed
6. Find a way to remove "stock-message" from find-controller.html, until successful response
7. ToUpperCase() for stock symbol, find-controller

__Change Log__

1. make new dev branch to work in
2. add custom.css file in /public/css folder
3. move main page logo down 5% in custom.css
4. changes initial error message to "Stock not found", fo
5. added vm.error = ''; clears error from page, find-controller.js:13