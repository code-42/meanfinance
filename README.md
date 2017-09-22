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

__GitHub push plan__
Dennis figured out how to make additional git push remote
1.  on the shared workspace, add a remote repo
    git remote add dennis https://github.com/MrOolong/mean_finance_scrum.git
    git remote add luke https://github.com/lukeyyfrancis5/meanfinance.git
    git remote add john https://github.com/Madpoints/meanFinance.git
2. you make edits on your own c9 meanfinance workspace
3. after you test it on your c9 browser,  
    make sure the shared workspace is in the dev branch
    copy & paste to the shared dev workspace
4. then we will test again, and then commit the changes
5. after all the commits are in for the day, we can push from dev branch
6. then merge into master branch
7. then push to master on github
8. then push to each of your github repos using the remote name above
9. 




__A few things I noticed:__

1. README.md is misspelled REACME.md so I changed it
2. README.md needs md formatting, not &lt;html&gt;
3. missing file css/custom.css  // needed to move logo down  
4. CDFinance database has 6756 stocks in it already, no need to import from .csv
5. Deposit Funds page says Find Stocks - easily changed
6. done - Find a way to remove "stock-message" from find-controller.html, until successful response
7. ToUpperCase() for stock symbol, find-controller
8. lf - Change the layout of "Stock input box" "make a limit"- LF
9. dd- Change logo font

__Change Log__

1. ed - make new dev branch to work in
2. ed - add custom.css file in /public/css folder
3. jf - move main page logo down 5% in custom.css
4. jf - changes initial error message to "Stock not found", fo
5. jf - added vm.error = ''; clears error from page, find-controller.js:13
6.  changed Deposit Funds page to say Find Stocks
8. Change the layout of "Stock input box"
9. Change logo font

__Change Log__

1. make new dev branch to work in
2. add custom.css file in /public/css folder
3. move main page logo down 5% in custom.css
4. changes initial error message to "Stock not found", fo
5. added vm.error = ''; clears error from page, find-controller.js:13 - jf
6. dashboard now displays stocks and amounts, vm.stocks = response.data.stocks, dashboard-controller.js:14 - jf
7. api key now stored in env variable, jf
8. hide stock-message on find page when no stock is found, jf
9. hide stock-message on find page when input field detects key press, jf

Storing/Accessing API key-

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