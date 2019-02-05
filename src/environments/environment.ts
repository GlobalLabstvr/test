import { initializeApp } from "firebase";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCKWeVAOMIfzOD6YF5l4eQyG6xJzgKZqc8",
    authDomain: "test1-c789a.firebaseapp.com",
    databaseURL: "https://test1-c789a.firebaseio.com",
    projectId: "test1-c789a",
    storageBucket: "test1-c789a.appspot.com",
    messagingSenderId: "533249528553"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
