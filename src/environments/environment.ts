// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: 'https://api.exchangerate.host/latest?/source=ecb&base=',
  firebase : {
    apiKey: "AIzaSyCHus9wv4ZgmqvxbGYFI0ZyGD6qO2knSBM",
    authDomain: "dashboard-33d8e.firebaseapp.com",
    databaseURL: "https://dashboard-33d8e-default-rtdb.firebaseio.com",
    projectId: "dashboard-33d8e",
    storageBucket: "dashboard-33d8e.appspot.com",
    messagingSenderId: "82198380910",
    appId: "1:82198380910:web:55ea48f2a281b88a4b817f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
