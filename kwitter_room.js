  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC_mKyduRPBAlc1O4p6ie3fVtrNiTe0aNg",
      authDomain: "letschat-e59fe.firebaseapp.com",
      databaseURL: "https://letschat-e59fe-default-rtdb.firebaseio.com",
      projectId: "letschat-e59fe",
      storageBucket: "letschat-e59fe.appspot.com",
      messagingSenderId: "595934885521",
      appId: "1:595934885521:web:cc72f89a1c379ed9ff3130"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function add_room() {
          room_name = document.getElementById("room_name").value;
            
          firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
        });

          localStorage.setItem("room_name",user_name);

          window.location="kwitter_page.html";
    }
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
     });});}
getData();
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

   