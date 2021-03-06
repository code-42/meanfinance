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



__A few things I noticed:__

1. README.md is misspelled REACME.md so I changed it
2. README.md needs md formatting, not &lt;html&gt;
3. missing file css/custom.css  // needed to move logo down  
4. CDFinance database has 6756 stocks in it already, no need to import from .csv
5. Deposit Funds page says Find Stocks - easily changed
6. Find a way to remove "stock-message" from find-controller.html, until successful response
7. ToUpperCase() for stock symbol, find-controller
8. Change the layout of "Stock input box"
9. Change logo font

__Change Log__

1. make new dev branch to work in
2. add custom.css file in /public/css folder
3. move main page logo down 5% in custom.css
4. changes initial error message to "Stock not found", fo
5. capitalized "amount" on Deposit Funds page for consistency with other pages -dd
6. replaced logo img with google font text -dd
7. created body-toggle class to use as selector for the night mode. please add this class to any text element you want white on toggle -dd
8. added vm.error = ''; clears error from page, find-controller.js:13 - jf
9. dashboard now displays stocks and amounts, vm.stocks = response.data.stocks, dashboard-controller.js:14 - jf
10. api key now stored in env variable, jf
11. hide stock-message on find page when no stock is found, jf
12. hide stock-message on find page when input field detects key press, jf

__Storing/Accessing API key__

1. For storing your API key create a file named app-env 
    $ touch app-env

2. Add this line to the app-env file and save
    export API_KEY="Your api key here"

3. Source this file into your local environment using source command
    $ source app-env

4. Now the API key can be accessed with
    process.env.API_KEY

5. Replace the API key in meanfinance/api/controllers/shared/stockPrice.js line:2, with process.env.API_KEY
    example
        old: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey="Your API key"&outputsize=compact"
        new: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey="+process.env.API_KEY+"&outputsize=compact"

6. Last add app-env to .gitignore so this file is ignored to .git

This way we can use our keys in our local environment and be safe from getting this sensitive data exposed to others on Github.



