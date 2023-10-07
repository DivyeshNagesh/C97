var firebaseConfig = {
  apiKey: "AIzaSyBqkIhjN6VAh5Ld7BLYWFUjIOQU13mmbBE",
  authDomain: "kwitter-881c8.firebaseapp.com",
  databaseURL: "https://kwitter-881c8-default-rtdb.firebaseio.com",
  projectId: "kwitter-881c8",
  storageBucket: "kwitter-881c8.appspot.com",
  messagingSenderId: "64921420407",
  appId: "1:64921420407:web:8ab2b2fec5feca2af3fc72"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStorage.setItem("room_name" , room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function login(){
    localStorage.addItem("user_name");
}