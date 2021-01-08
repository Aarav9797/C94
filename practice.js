var firebaseConfig = {
    apiKey: "AIzaSyAvpwxvgCqAGLYCp_CF7JT68DjUzd1Ten0",
    authDomain: "kwitter-9c886.firebaseapp.com",
    databaseURL: "https://kwitter-9c886-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c886",
    storageBucket: "kwitter-9c886.appspot.com",
    messagingSenderId: "1071063708078",
    appId: "1:1071063708078:web:361bfdbacdf9445b9e183f",
    measurementId: "G-H0NZB8PVRH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Save(){
      var name=document.getElementById("IDI").value;
      firebase.database().ref("/").child(name).update({
          name:"Aarav"
      });
}