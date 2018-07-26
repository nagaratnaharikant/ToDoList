// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
      apiKey: 'AIzaSyB-FJGCa20hfIrwjsQENSA6MfFlqxKyq4I',
      authDomain: 'todolist-558c7.firebaseapp.com',
      databaseURL: 'https://todolist-558c7.firebaseio.com',
      projectId: 'todolist-558c7',
      storageBucket: 'todolist-558c7.appspot.com',
      messagingSenderId: '928681770673'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
