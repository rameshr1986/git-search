# git-search
## Introduction
   This is an app where you can browse through git repositories and view the issues. It is written using angular 1.5 with unit test coverage using karma and jasmine. Bower, npm are used as package managers and gulp as building tool.
   
   Bootstrap css framework is used for ui components.
   
   
  
   
## Prerequisites to run the application
   1. git, node js 
   
   2. if git not available Download and install git from https://git-scm.com/download/win
   
## Installation and running the application
   1. Extract the code from github repository. **git clone "https://github.com/rameshr1986/git-search.git"** 
   2. Run cd git-search
   3. Run "npm install -g bower" (in case if you do not have bower)
   4. Run "npm install -g gulp"  (in case if you do not have gulp globally installed)
   5. Run "npm install"   
   6. Run "bower install"
   7. Run "gulp"
   
   Once the server starts you can hit at the url at http://localhost:8000. 
   
   
   Alternatively
   
    Download as a zip folder and extract the contents.
    
    Run cd git-search or to root folder where you can see package.json, bower.json, gulpfile.js.
    
    Run npm install -g bower (in case if you do not have bower)
    
    Run npm install -g gulp 
    
    Run npm install
    
    Run bower install
    
   Run gulp 
   
   and wait till server starts at http://localhost:8000
   
   
   
## Code explanation

Code is modularized in to the following section and each one of them is self contained

-src

 ---app
 
    ---home    --->   Its the simple search page with header and footer. It is the default route.
    
    ---common    --> Its a module where it contains components such as header and footer.
    
    ---repositoryydetail -- > It isa module where it contains the detail of individual repository.
    
  
   
## Unit testing
Unit test cases are written using **jasmine** and mocks are written using **angular-mocks** with **karma** as a test runner.
To run unit test run **"karma start karma.conf.js"**. It generates html report using html reporter and you find clean html coverage report with **full unit test coverage** for all files

Folder structure is same but under src/test folder

-src

 ---test
 
Also it gives a **coverage report** under **coverage/googlechrome..../index.html **

