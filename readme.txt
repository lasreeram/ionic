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
 1998  npm install --save @ionic-native/google-plus@beta
 2000  ionic serve --devapp


# some more experimentation
 1945  cd ionic
 1949  cd io.ionic.collabjunc/
 1951  ionic serve -b --nolivereload
 1952  ionic serve -b --no-livereload
 1974  ionic serve -b --no-livereload
 1976  ionic serve --devapp
 1978  ionic serve --devapp --no-livereload
 1993  cd ionic/
 1995  cd io.ionic.collabjunc/
 1996  ionic serve --devapp --no-livereload
 1997  ionic cordova plugin add cordova-plugin-googleplus
 1999  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId
 2001  cd ionic/
 2003  cd io.ionic.collabjunc/
 2018  ionic serve --devapp
 2021  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId
 2022  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId --verbose
 2023  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId WEB_APPLICATION_CLIENT_ID=yourWebClientid
 2024  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId --variable WEB_APPLICATION_CLIENT_ID=yourWebClientid
 2026  ionic serve --devapp
 2036  ionic serve --devapp


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
#Checking 
  458  npm install cordova -g
  459  ionic serve --devapp
  460  ionic cordova prepare
  461  ionic cordova platform add ios
  462  npm i -g cordova-res
  463  ionic cordova resources ios --force
  464  ionic cordova build ios
  465  xcode-select --install
  466  xcode-select --install
  467  npm install -g ios-sim
  468  npm -install -g ios-deploy
  469  npm install -g ios-deploy
  470  sudo xcode-select --switch /Library/Developer/CommandLineTools
  471  npm install -g ios-deploy
  472  xcode-select --switch /Library/Developer/CommandLineTools
  473  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  474  xcode-select --switch /Library/Developer/CommandLineTools
  475  npm install -g ios-deploy
  476  ionic cordova resources ios --force
  477  ionic serve --devapp
  478  pwd
  479  ls -tlr
  480  cd ../
  481  cd io.
  482  ls -tlr
  483  cd ionic/
  484  ls -tlr
  485  ls -tlr
  486  vi config.xml 
  487  ionic serve --devapp
  488  npm install --save @ionic-native/google-plus@beta
  489  ionic cordova plugin add cordova-plugin-googleplus
  490  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=yourReverseClientId --variable WEB_APPLICATION_CLIENT_ID=yourWebClientid
  491  ionic serve --devapp
  492  ionic cordova run ios
  493  npm i -g native-run
  494  ionic cordova run ios
  495  cordova platform add ios --save
  496  ionic cordova run ios
  497  pwd
  498  ionic cordova run ios
  499  pwd
  500  clear
  501  pwd
  502  cd ionic/
  503  ls -tlr
  504  npm install -g ios-sim
  505  npm install -g ios-deploy
  506  npm install -g ios-deploy > ios.build.txt
  507  vi ios.build.txt 
  508  vi ios.build.txt 
  509  npm install -g ios-deploy --unsafe-perm=true
  510  clear
  511  pwd
  512  ionic capacitor add ios
  513  pwd
  514  ls -tlr
  515  cat config.xml 
  516  vi config.xml 
  517  cd ..
  518  pwd
  519  mv ionic io.ionic.collabjun
  520  cd -
  521  cd io.ionic.collabjun/
  522  vi config.xml 
  523  cd ..
  524  pwd
  525  ls -tlr
  526  mv io.ionic.collabjun io.ionic.collabjunc
  527  cd io.ionic.collabjunc/
  528  ls -tlr
  529  cd ios
  530  pwd
  531  cd ../platforms/
  532  ls -tlr
  533  cd ios
  534  ls -tlr
  535  pwd
  536  cd ../../
  537  pwd
  538  ionic cordova prepare ios
  539  owd
  540  pwd
  541  pwd
  542  pwd
  543  vi config.xml 
  544  vi config.xml 
  545  vi config.xml 
  546  vi config.xml 
  547  pwd
  548  find . -name config.xml
  549  cd platforms/ios/collabJunction/
  550  vi config.xml 
  551  pwd
  552  cd ../
  553  cd ../../
  554  ls -tlr
  555  ls readme.txt 
  556  history 100 >> readme.txt 
