{/* <script type="module"> */}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUCbNNnCPKmYci4i0LxWxWqHdey-tIdiY",
  authDomain: "useradd-f45fd.firebaseapp.com",
  projectId: "useradd-f45fd",
  storageBucket: "useradd-f45fd.appspot.com",
  messagingSenderId: "487987182102",
  appId: "1:487987182102:web:9bf18638a86dac505b9337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set,child,onValue,get} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// import {getStorage, ref as sRef, uploadBytesResumble, getDownloadURl} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

const db  = getDatabase();
// const storage = getStorage();
// ------------------Refernce----------
let namebox = document.getElementById("Namebox");
let rollbox = document.getElementById("Rollbox");
let emailbox = document.getElementById("Emailbox");
let genderbox = document.getElementById("gender");
let mobbox = document.getElementById("Mob");

let insbtn =  document.getElementById("Insbtn");



function InsertData(){
    set(ref(db,"Thestudents/"+namebox.value),{
        NameofStd:namebox.value,
        RollNo: rollbox.value,
        MobileNo: mobbox.value,
        Gender:genderbox.value
    })
    .then(()=>{
        alert("Data Stored Succcesfully")
    }).catch((error)=>{
        alert("Unsuccesfull")
    });

}

function check(){
    if(namebox.value.length===0 || rollbox.value.length===0 || mobbox.value.length==0 || genderbox.value=="none"){
        alert("Enter all Field value")
        }
    else{
        InsertData();
        namebox.value="" ; 
        rollbox.value="" ; 
        mobbox.value="";
        emailbox.value="";
       genderbox.value=="none"
           
    }
    }
        

      


// ----------------------Assisging btn--------------------------------
// insbtn.addEventListener('click',InsertData);
insbtn.addEventListener('click',check);




// -------------------Create Dynamic Table--------------------------

// </script>