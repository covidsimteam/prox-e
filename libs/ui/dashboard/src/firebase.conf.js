const firebaseConfig = {
  "projectId": "dashboard-covidsimteam",
  "appId": "1:123975265817:web:cdf272587fed49447d4488",
  "databaseURL": "https://dashboard-covidsimteam.firebaseio.com",
  "storageBucket": "dashboard-covidsimteam.appspot.com",
  "locationId": "asia-east2",
  "apiKey": "AIzaSyDVJTZMO2Ju8NosnpX_4SD92ZcyPWj9PkM", //it's **okay** to expose this key in git, no need to hide it
  "authDomain": "dashboard-covidsimteam.firebaseapp.com",
  "messagingSenderId": "123975265817",
  "measurementId": "G-RXEFK7Q9BP"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    console.log(`Firebase SDK loaded with ${features.join(', ')}`);
  } catch (e) {
    console.error(e);
    console.log('Error loading the Firebase SDK, check the console.');
  }

});
