Difference b/w npm & npx

-npm -> node package manager : Use when nodes are installed globally in the system. 
-npx -> node package executer : Executes the scripts only, if someone don't want the modules to be installed manually

create-react-app

-It contains various librarites like react-dom, react-native etc. 
-It is not effecient to use react nowadays as, it is very bulky, rather we shld use Vite or Next etc. 
-It is a utility or software or bundler which is used to create a react application. 

package.json file 

-Every react root folder must have package.json file, which tells necessary stuff about the react. 
-"scripts" key in the json, will tell us all the commands to use for the created project. 

esLint

- helps to find & fix Javascript code by underlining using red line. 


npm start (or npm run start) vs npm build

npm build
-Used for production purposes, coz internally browser understand only html,css and js & not react. 
-So, this is kinda used to convert the react files into simple html,css,js files & for the production the "src" folder is not sent , rather this "build" folder is sent, as when we run "npm run build", "build" folder is created. 

Difference b/w "npm run dev" & "npm run start"

React app made using : 
- create-react-app : will use script "start"
- vit : will use script "dev"

When we use vite : 
- We need to install node modules using "npm i" but it automatically gets download in create-react-app. 


