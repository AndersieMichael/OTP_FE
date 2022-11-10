import React, { Component } from 'react'
import firebase from './firebase';
import { EmailAuthProvider, getAuth, linkWithCredential } from "firebase/auth";
export class App extends Component {
  handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

    var number = '+6281285950495';

    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      
      var code = prompt('Enter the otp', '');
        
        if(code === null) return;
        
        e.confirm(code).then(function (result) {
          console.log(result);
          
          //cara tambahan matthew
          const auth = getAuth();
          console.log(auth);
          var email="MichaelTest@gmail.com";
          var password="testing";
          const credential = EmailAuthProvider.credential(email, password);
            
            linkWithCredential(auth.currentUser, credential)
              .then((usercred) => {
                const user = usercred.user;
                console.log("Account linking success", user);
                //manggil api...
              }).catch((error) => {
                console.log("Account linking error", error);
              });
          
          document.querySelector('label').textContent +=   result.user.phoneNumber + " Number verified";
            
        }).catch(function (error) {
            console.error( error);
            
        });
    })
    .catch(function (error) {
        console.error( error);
    });
  }
  Checker=()=>{
    
    var auth = getAuth();
    var user = auth.currentUser;
    console.log(auth);
    console.log(user);
    if(user){
      console.log("user sudah login");
      console.log(user.uid);
      // console.log(user);
      // console.log(user.g);
    }else{
      console.log("user belum login");
    }
    
  }
  render() {
    return (
      <div>
           <label></label>
        <div id="recaptcha"></div>
        <button onClick={this.handleClick}>Get OTP</button>
      </div>
    )
  }
}

export default App