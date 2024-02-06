 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCV0i0WItAMvtmKE8VNN1GJEsdEZty7dlM",
  authDomain: "contact-form-edc06.firebaseapp.com",
  databaseURL: "https://contact-form-edc06-default-rtdb.firebaseio.com",
  projectId: "contact-form-edc06",
  storageBucket: "contact-form-edc06.appspot.com",
  messagingSenderId: "446101639566",
  appId: "1:446101639566:web:ae5a7bfc6f495a8f9314df"
};
//initilize fire base

firebase.initializeApp(firebaseConfig);
//creating referance for the data bases
var condatctFormDB = firebase.database().ref('ContactForm')
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault() ;
  var name = getElementval("name");
  var emailid = getElementval("emailid");
  var msgContent = getElementval("msgContent");
  // console.log(name,email,msgContent);
  saveMessage(name,emailid,msgContent);
  //enable alert message
  document.querySelector(".alert").style.display='block';

  //remove alert
  setTimeout(()=>{
    document.querySelector(".alert").style.display = "none";
  },3000);
  
document.getElementById("contactForm").reset();

}
const saveMessage = (name,emailid,msgContent)=>{
  var newContactForm= condatctFormDB.push();
  newContactForm.set({
    name : name,
    emailid: emailid,
    msgContent: msgContent,
  })
};

const getElementval =(id)=>{
  return document.getElementById(id).value;
}