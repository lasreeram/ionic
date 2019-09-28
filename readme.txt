 1987  ionic start io.ionic.collabjunc
 1988  ls -tlr
 1989  cd io.ionic.collabjunc/
 1990  ls -tlr
 1991  vi config.xml
 1992  ionic integrations enable cordova --add
 1993  ls -tlr
 1994  vi config.xml 
 1995  ls -altr
 1996  vi config.xml 

## GoogleService-Info.plist. Open this file and you will be able to see the REVERSED_CLIENT_ID. 
 1997  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a
 1998  npm install --save @ionic-native/google-plus@beta
 1999  ifconfig
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
 1999  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a
 2001  cd ionic/
 2003  cd io.ionic.collabjunc/
 2018  ionic serve --devapp
 2021  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a
 2022  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a --verbose
 2023  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a WEB_APPLICATION_CLIENT_ID=800975707574-jaaroiik3tj8ie12devfd5i3rt3mn3au.apps.googleusercontent.com
 2024  ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.800975707574-7ibj240k3occotlao32573vpbjbpqt1a --variable WEB_APPLICATION_CLIENT_ID=800975707574-jaaroiik3tj8ie12devfd5i3rt3mn3au.apps.googleusercontent.com
 2026  ionic serve --devapp
 2036  ionic serve --devapp
 2037  ionic cordova run ioas
 2038  ionic cordova run ios
 2039  ionic cordova platform add ios
 2040  ionic cordova build ios
 2041  ionic serve --devapp
 2042  history 100 | grep ionic

Date: 2019-09-26T02:43:41.499Z - Hash: 8918eabcf7e1b0c5f4bd - Time: 18396ms
> cordova build ios
CordovaError: Promise rejected with non-error: 'xcodebuild was not found. Please install version 9.0.0 or greater from App Store'
    at cli.catch.err (/usr/lib/node_modules/cordova/bin/cordova:29:15)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:834:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
[ERROR] An error occurred while running subprocess cordova.

