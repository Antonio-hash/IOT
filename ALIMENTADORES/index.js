

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
var dbRef = firebase.database().ref('Alimentador1');
dbRef.on("value", function (snapshot) {
    snapshot.forEach(function (element) {
        document.querySelector('#root').innerHTML += `
            <div> ${element.val()}</div>
        `
    });
    var dbRef = firebase.database().ref('Alimentador2');
    dbRef.on("value", function (snapshot) {
        snapshot.forEach(function (element) {
            document.querySelector('#root2').innerHTML += `
            <div> ${element.val()}</div>
            
        `
        });
    })
    var dbRef = firebase.database().ref('Gallinero1');
    dbRef.on("value", function (snapshot) {
        snapshot.forEach(function (element) {
            document.querySelector('#root3').innerHTML += `
            <div> ${element.val()}</div>
            
        `
        console.log(dbRef);
        });
    })
    var dbRef = firebase.database().ref('Gallinero2');
    dbRef.on("value", function (snapshot) {
        snapshot.forEach(function (element) {
            document.querySelector('#root4').innerHTML += `
            <div> ${element.val()}</div>
            
        `
        });
    })
})



// var firebaseConfig = {
//     apiKey: "AIzaSyBJYkf1vdBb6i6TkZgvy2jDU-qT5REf8Fw",
//     authDomain: "preyecto-iot.firebaseapp.com",
//     databaseURL: "https://preyecto-iot-default-rtdb.firebaseio.com/",
//     projectId: "preyecto-iot",
//     storageBucket: "preyecto-iot.appspot.com",
//     messagingSenderId: "727817961430",
//     appId: "1:727817961430:web:6453cb22169300a9a02e77"
//   };
//   firebase.initializeApp(firebaseConfig);


// var app = document.getElementById('app')

// var dbRef = firebase.database()

// var messageRef = dbRef.ref('alimentador1')
// var messageRef = dbRef.ref('alimentador2')


// messageRef.once('value').then(function(snap){
//     app.innerText = snap.val()
// })

// messageRef.once('value').then(function(snap){
//   app.innerText = snap.val()
// })



