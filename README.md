
# Coding School

An Android app which is made by React Native Expo. The app Named Coding School.
## Install First Native React Apps

First of All Clone this project on your local computer and install javascript project
```bash
   npx create-expo-app yourAppName --template blank
```
## Setup Instraction

First of All Clone this project on your local computer and install node package manager

```bash
   npm install
```
How to run the project

```bash
   npx expo,
   npx expo start
```
I Dont Know this command
```bash
   java -jar bundletool.jar build-apks --bundle=”D:\APK\cmr.aab” --output=”D:\APK\CMR1.apks” --ks="D:\APK\local.keystore" --ks-key-alias=key0 --mode=universal
```


## How to build Android apk Using React Native Expo
## Reference link
 - [How-to-generate-apk-using-react-native-expo](https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae)
 - [Expo.dev](https://docs.expo.dev/build-reference/apk/)
 - [Expo dev build](https://docs.expo.dev/build/setup/)


## Step 1

I assume, if you are reading a blog on exporting the app , you have already installed the expo CLI 👀.

To check if you have expo CLI install run

```bash
   expo -V
```

## Step 2

In case you don't. You can install it using npm.

We also need the eas build tools

```bash
   
npm install --global expo-cli eas-cli
```

## Step 3

Create expo account and login
First requirement for generating the apk file is creating an expo account.
Create an account here

```bash
   
https://expo.dev/accounts/alaminakash145
```
## Step 4

Login to expo CLI
Login to expo account using the command :

```bash
   
expo login
```
Conform Your Account :
```bash
   
expo whoami
```
## Step 5

Edit Config
By default the eas build tool will give you a playstore build file.

If you want a .apk file you need to create a `eas.json` file and add a `buildType` as `apk`.

```bash
   
{
"build": {
"preview": {
"android": {
"buildType": "apk"
}
},
"preview2": {
"android": {
"gradleCommand": ":app:assembleRelease"
}
},
"preview3": {
"developmentClient": true
},
"production": {}
}
}
```

## Step 6

Build APKs for Android Emulators and devices

Configuring a profile to build APKs
To generate an .apk, modify the eas.json by adding one of the following properties in a build profile:

developmentClient to true (default)
distribution to internal
android.buildType to apk
android.gradleCommand to :app:assembleRelease, :app:assembleDebug or any other gradle command that produces .apk

```bash
   
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "preview4": {
      "distribution": "internal"
    },
    "production": {}
  }
}

```
## Step 7

Eas build process

```bash
   
eas build:configure

```
## Step 8

Create A new Projects on expo website And generate below type code if you are allready create a new Projects no need to apply this code!

```bash
   
npm install --global eas-cli
eas init --id 05cb7c60-d90d-4207-9487-c58dd5e07f48

```
## Step 9

The final steps. Apply this code then Select platform do you need Android or ios. i will suggest to you you select Android

```bash
   
eas build

```
## Step 10

Download apk
After the build is complete you can go to the builds section in your dashboard and download the apk.
