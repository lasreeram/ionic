Some terms:
-----------
cordova - is the Apache project for phonegap. It enables developers to create application using HTML5, CSS3, JavaScript - instead of relying on platform - such as iOS, Android, Windows
capacitor - is similar to cordova and provides the native bridge between WebApps and Mobile Apps
ionic - provides a framework for developing mobile apps using Angular, React or Vue and converting them in to native apps using capacitor or cordova
Xcode - is an integrated development environment for IOS (MACos, ios, ipados, watchOs, TVos)
Firebase - is a google cloud mobile app platform that allows management of API credential among other things such as analytics - https://cloud.google.com/firestore/docs/client/get-firebash
Google Domains - is the google registrar for domain names
Cloud DNS - is the google's authoritative Domain Name System


First steps
-----------
Created a google cloud account
	- Added two VMs, one for web called webapp and another for DB called db-server with Ubuntu LTS 18.04
	- Changed the webapp public ip to a static iP as it would need to be added to the DNS A record
	- readme available on both VMs that show what was installed

On Google Domains:
	- Created a domain from google domains
	- The domain name is required for enabling TLS from Let's Encrypt
	- Configured the Domain 

On cloud DNS:
	- Created a zone called collab-junction
	- Added record A with IP address of the webapp VM. 
	- Added record CNAME for the domain name collab-junction.com
	- Google cloud added the NS records with multiple name servers. Updated google domains with the Name server records

On cloud API&Services console
	- Setup OAuth Consent screen where you set up the project name that the signed in user sees, provide support email, load application logo
	- For each of the APIs (Android, IOS and Web) add filtering rules. For example the 'Identity Toolkit API' is the only API allowed. Restricting the API is important to prevent unintended use.


Setting up Development Environment in Ubuntu
---------------------------------------------
#Created the project
 1987  ionic start io.ionic.collabjunc


#Edited the config.xml to change the widgetid to your app name for example: widget id="io.ionic.collabjunc"
 1989  cd io.ionic.collabjunc/
 1991  vi config.xml

#Ad cordova to the project
 1992  ionic integrations enable cordova --add

#Login to google cloud - Firebase Account
#Enable Firebase account 
#Setup the Application for ios
#Setup the Application for android

#When you create the Firebase account in google cloud you will be able to generate the GoogleService-Info.plist file which contains the REVERSE_CLIENT_ID. You will also need the WEBCLIENT id which is available on the Firebase console
#https://cloud.google.com/firestore/docs/client/get-firebase

#When adding the googleplus plugin we need to provide these two values as they will be used within the plugin to connect to Google.


## GoogleService-Info.plist. Open this file and you will be able to see the REVERSED_CLIENT_ID. 
 1997  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId

#install the google-plus npm package? - Need to check if this is needed
 1998  npm install --save @ionic-native/google-plus@beta
 2000  ionic serve --devapp


# some more experimentation
 1945  cd ionic
 1949  cd io.ionic.collabjunc/
 1978  ionic serve --devapp --no-livereload
 2023  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId WEB_APPLICATION_CLIENT_ID=yourWebClientid


 2038  ionic cordova run ios
 2039  ionic cordova platform add ios
 2040  ionic cordova build ios
 2041  ionic serve --devapp
 2042  history 100 | grep ionic


#Got the error that xcode was not installed. Installed xcode from App Store
Date: 2019-09-26T02:43:41.499Z - Hash: 8918eabcf7e1b0c5f4bd - Time: 18396ms
> cordova build ios
CordovaError: Promise rejected with non-error: 'xcodebuild was not found. Please install version 9.0.0 or greater from App Store'
    at cli.catch.err (/usr/lib/node_modules/cordova/bin/cordova:29:15)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
[ERROR] An error occurred while running subprocess cordova.

#Got the above error
#Was trying to run ios on Ubuntu but found out that IOS applications can only be developed on a MAC OS.  


Setting up Development environment on MAC 
-----------------------------------------

#install cordova
  458  npm install cordova -g
  460  ionic cordova prepare
  461  ionic cordova platform add ios
  462  npm i -g cordova-res
  463  ionic cordova resources ios --force
  464  ionic cordova build ios

#check xcode version. the current version 
#Version 9.4.1 (9F2000)
  466  xcode-select --install

#install ios-sim in npm. Not sure if this is required if you directly open the project in XCODE.
  467  npm install -g ios-sim
  468  npm -install -g ios-deploy
  469  npm install -g ios-deploy

#This was required to overcome some error. Forget what the error was. Probably ios-deploy failing
  474  xcode-select --switch /Library/Developer/CommandLineTools
  475  npm install -g ios-deploy
  476  ionic cordova resources ios --force
  477  ionic serve --devapp
  490  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId --variable WEB_APPLICATION_CLIENT_ID=yourWebClientid
  492  ionic cordova run ios

#At this point nothing worked so thought it might be a good idea to switch to capacitor from cordova. 
  512  ionic capacitor add ios

#But went back to cordova
  538  ionic cordova prepare ios

#Opened XCODE and then opened the ios workspace file within the ionic project under platforms/ios/. This allows you to build the ionic native app for ios and deploy on Simulator.
#If you are changing ionic code then you need to do 
ionic cordova build ios


## TODO Items:
- TODO: directly serve the app on the simulator without using XCODE
- TODO: setup android simulator
- TODO: restrict my API key to specific Android applications
- TODO: Build Webapi spec using swagger
- TODO: Design Application logo (and set it up on the OAUTH consent screen)
- TODO: Setup local flask-mongodb on ubuntu

