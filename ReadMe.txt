Need nodejs to manage pakages
and install with react native

All codeed files are in src file main folder 

dependencies need to install, just copy  past on cmd in project file
-- choco install -y nodejs.install openjdk8
-- npm install @react-navigation/native
-- npm install react-native-screens react-native-safe-area-context
-- npm install @react-navigation/native-stack
-- npm i axios
-- npm install react-native-elements
-- npm install react-native-vector-icons
 



Manual linking of react-native-vector-icons is not necessary if you're using react-native@0.60.0 or 
above since it is done automatically.This will throw an error though it won't prevent the application
from running. To fix this you'll simply have to run react-native unlink react-native-vector-icons and 
the process will run as expected.


To run in debug mode simply run command  'npx react-native run-android' in project file

To build apk follow these instructions :-
 
1. Run this command in project file
 
 ...
  $ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
 ...

2. Place the my-release-key.keystore file under the android/app directory in your project folder.Then 
   edit the file ~/.gradle/gradle.properties and add the following (replace **** with the correct keystore password, alias and key password)

   ...
    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=****
    MYAPP_RELEASE_KEY_PASSWORD=****
   ...


3. Then edit app/build.gradle and ensure the following are there (the sections with signingConfigs 
   signingConfig may need to be added) :

    ...
    android {
        ...
        defaultConfig { ... }
        signingConfigs {
            release {
                if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                    storeFile file(MYAPP_RELEASE_STORE_FILE)
                    storePassword MYAPP_RELEASE_STORE_PASSWORD
                    keyAlias MYAPP_RELEASE_KEY_ALIAS
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD
                }
            }
        }
        buildTypes {
            release {
                ...
                signingConfig signingConfigs.release
            }
        }
    }
    ...



    Then run the command cd android && ./gradlew assembleRelease ,

4.For Windows 'cd android' and then run gradlew assembleRelease command , and find your signed apk under
  android/app/build/outputs/apk/app-release.apk, or android/app/build/outputs/apk/release/app-release.apk


