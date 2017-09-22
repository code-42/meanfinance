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
7. installed nodemon(npm install nodemon) - will restart server after making changes
8. going forward, we do NOT have to do all these steps, just
   *  run ./mongod in one terminal
   *  run nodemon in another terminal
   *  point your browser to https://meanfinance-code42.c9users.io

__GitHub push plan__

1. make a workspace on c9 or locally if you prefer
2. work in your own workspace
3. clone meanfinance from my github master branch
4. then in your c9 terminal
5. git checkout -b dev-YOURNAME   // ex. git checkout -b dev-john
6. work in your dev-YOURNAME workspace 
7. commit and push your changes while in dev-YOURNAME
8. then if you want you can git merge dev-YOURNAME into your master branch on your workspace
    that will not affect my repo, just don't push your master branch
9. I will have to manage mergeing your dev branches into my master branch
    and resolve any merge conflicts




__A few things I noticed:__

1. README.md is misspelled REACME.md so I changed it
2. README.md needs md formatting, not &lt;html&gt;
3. missing file css/custom.css  // needed to move logo down  
4. CDFinance database has 6756 stocks in it already, no need to import from .csv
5. Deposit Funds page says Find Stocks - easily changed
6. done - Find a way to remove "stock-message" from find-controller.html, until successful response
7. ToUpperCase() for stock symbol, find-controller
8. Change the layout of "Stock input box"
9. Change logo font


__Change Log__

1. ed - make new dev branch to work in
2. ed - add custom.css file in /public/css folder
3. jf - move main page logo down 5% in custom.css
4. jf - changes initial error message to "Stock not found", fo
5. jf - added vm.error = ''; clears error from page, find-controller.js:13
6.  changed Deposit Funds page to say Find Stocks

5. added vm.error = ''; clears error from page, find-controller.js:13
6. capitalized "amount" on Deposit Funds page for consistency with other pages -dd
7. replaced logo img with google font text -dd
8. lf - Change the layout of "Stock input box" "make a limit"- LF
9. dd- Change logo font
