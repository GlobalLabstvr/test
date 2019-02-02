import { initializeApp } from "firebase";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCPGKIkOlF0rCSmiig4UQoPDa-SgVzOFGI",
    authDomain: "https://console.firebase.google.com/u/1/project/first-firebase-project-fe361/authentication/users",
    databaseURL: "https://console.firebase.google.com/u/1/project/first-firebase-project-fe361/database/firestore/data~2FUser%20Profile~2FQGfGJxH5kWZXZUXrHPY6",
    projectId: "first-firebase-project-fe361",
    storageBucket: "https://console.firebase.google.com/u/1/project/first-firebase-project-fe361/storage/first-firebase-project-fe361.appspot.com/files",
    messagingSenderId: "399704375504"
    
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
