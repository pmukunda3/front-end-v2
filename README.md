# BeatHarmony Front-End-V2

This is the repository for BeatHarmony's react-native front-end codebase.

### Prerequisites:
Before working with this repository, ensure that you:

- [Install Node.js](https://nodejs.org/en/)
- [Install React-Native](https://facebook.github.io/react-native/docs/getting-started) (through "Expo CLI Quickstart")
- [Download the Expo app on your phone](https://expo.io/learn)

### Build and Run:

To get started with this repository on your computer, first clone this branch into your working directory:

```
git clone --branch ankit https://github.com/beatharmony/front-end-v2.git
```
In your terminal or command prompt, move into the directory where you cloned this repository, and run the following command to install all dependencies necessary by this repository:
```
npm install
```
Finally, to build and run the application through expo, run:
```
expo start
```
The above command will open up a localhost URL on your computer, which displays a QR code for your phone's expo app to scan. Scanning the QR code builds the react-native code on your phone for testing and prototyping. You will see 3 options for displaying the QR code in expo. 'LAN' is the preferred method, however LAN may fail to connect due to your internet's firewall settings. If this is the case, select 'Tunnel' for your expo QR code option, and wait for the Tunnel to be ready. 

NOTE: your expo app may occasionally get stuck and fail to build, in this case, start the expo app with the reset cache setting enabled:
```
expo r -c
```

### General Structure:

the `App.js` file is the 'entry point' for this application. This file handles login authentication with Facebook, and then proceeds to display the main application as detailed by `Nav.js` 

`Nav.js`  defines the structure of the bottom tab navigator and links the buttons in the navigator to their respective screens. 

The screens that make up the front-end application are located in the 'components' directory. 

### Next Steps / Priorities:

Development priorities for sprint-5 are:

1. Complete end-to-end user flow 
  * User can make post, user can like post, posts are ordered by trust
  * Enable follow and mark-trusted
  * Enable chat or tinder function
  * Replace all front-end dummy data with live back-end data

2. Integrate with [Spotify-API](https://developer.spotify.com/)
