var firebaseConfig = {
    apiKey: "AIzaSyBJYkf1vdBb6i6TkZgvy2jDU-qT5REf8Fw",
    authDomain: "preyecto-iot.firebaseapp.com",
    databaseURL: "https://preyecto-iot-default-rtdb.firebaseio.com/",
    projectId: "preyecto-iot",
    storageBucket: "preyecto-iot.appspot.com",
    messagingSenderId: "727817961430",
    appId: "1:727817961430:web:6453cb22169300a9a02e77"
  };
  firebase.initializeApp(firebaseConfig);


var app = document.getElementById('app')

var dbRef = firebase.database()

var messageRef = dbRef.ref('alimentador1')


messageRef.once('value').then(function(snap){
    app.innerText = snap.val()
})


