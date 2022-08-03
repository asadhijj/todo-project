var userName = prompt("Please Enter Your Name");
var userGender = prompt("Please Enter Your Gender?");
var userAge = prompt("Please Enter Your Age");
while(userAge <=0 ) {
    if (userAge <= 0){
        alert("please enter a valid age!");
        userAge = prompt("Please Enter Your Age");
    }
    
    
  
};
var welcomeMsg = confirm ("Do You Want to Skip The Welcoming Page ?");


function userPronunce (userGender) {
    var pronounce;
    if (userGender == "male" || userGender=="Male"){
        pronounce ="Mr";
    } else if( userGender == "female" || userGender =="Female"){
        pronounce ="Mrs";

    } else {
        pronounce = null;
    }
        
    return pronounce;
    };
    


function userFullName (weclomeMsg) {
    if (welcomeMsg ==false && userPronunce(userGender) !== null) {
        alert ("We are pleased to have you " + userPronunce(userGender)+'.'+userName)
    } else if (weclomeMsg ==false && userPronunce(userGender) == null){ 
        alert ("We are pleased to have you "+ userName)

    }else if(welcomeMsg == true){
        alert("please answer the following questions");
}
}

userPronunce (userGender);
userFullName (welcomeMsg);




var q1 =prompt("Do you consider this good ? (Y/N)");
var q2 =prompt("Did you like the welcoming msg? (Y/N)");
var q3 =prompt("should we delete it ? (Y/N)");


var myArr = [q1, q2, q3];

for (let i=0; i<=myArr.length-1;i++) {
    if ( myArr[i] ==0){
        myArr[i]="invalid";
        alert ("invalid");
       
    
          
    }
 console.log(myArr[i]);
};
