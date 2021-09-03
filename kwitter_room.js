// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDEm2vSnQ_GKpWYMQhK_qn86y4LhwD8Ho4",
  authDomain: "adv-94-7dbac.firebaseapp.com",
  databaseURL: "https://adv-94-7dbac-default-rtdb.firebaseio.com",
  projectId: "adv-94-7dbac",
  storageBucket: "adv-94-7dbac.appspot.com",
  messagingSenderId: "566994618761",
  appId: "1:566994618761:web:609047513fbc5a19307958",
  measurementId: "G-296W210M1H"
};
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
// Initialize Firebase
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();


function addRoom()
{
 room_name = document.getElementById("room_name").value;


 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}