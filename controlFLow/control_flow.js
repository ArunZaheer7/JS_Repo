let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "Subscriber";
let userCategory;
let isAuthenticated = True;
// const accessLevel2= ()=>{
// if(userRole==="admin"){
//     accessLevel= "Full access granted";
// }else if (userRole==="manager"){
//     accessLevel="Limited access granted";
// }else{
//     accessLevel="No access granted";
// }
// return ` Access Level: ${accessLevel}`;//return is essention to run the function smoothly
// console.log(` Access Level: ${accessLevel}`);}
// document.getElementById("para").innerHTML=accessLevel2();



//---------------------- Step 3 ---------------------------- 
// const accessLevel2= ()=>{
// if(isLoggedIn){
//     if(userRole==="admin"){
//         userMessage="Welcome, Admin!"
//     }else{
//         userMessage="Welcome, User!"
//     }

// }else{
//     userMessage="Please log in to access the system."
// }
// return ` Access Level: ${accessLevel} <br> User Message: ${userMessage}`;//return is essention to run the function smoothly
// console.log(` Access Level: ${accessLevel}`);}
// document.getElementById("para").innerHTML=accessLevel2();

//---------------------- Step 4 ---------------------------- 

// const accessLevel2= ()=>{
// switch(userType){
//     case "admin":
//         userCategory="Administrator";
//         break;
//     case "manager":
//         userCategory="Manager";
//         break;
//     case "Subscriber":
//         userCategory = "Subscriber";
//         break;
//     default:
//         userCategory="Unknown"
// }
// return ` User Category: ${userCategory}`;//return is essention to run the function smoothly
// console.log(` Access Level: ${accessLevel}`);}
// document.getElementById("para").innerHTML=accessLevel2();


//----------------------------- Step 5 ------------------------------


let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log(`Authentication Status: ${authenticationStatus}`);