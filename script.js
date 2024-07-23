//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');
let mainDiv = document.getElementById('content');
let secndBtn = document.getElementById('btntwo');
let infoBar = document.getElementById('postcat');

//import { my_Key } from "./modules/module1";


clickBtn.addEventListener('click', theCatApi);

// async function theCatApi(){
//    const response = await fetch("https://api.thecatapi.com/v1/images/search");
//    const blobs = await response.blob();
//    console.log(blobs);

//    document.getElementById('pets').src = URL.createObjectURL(blobs);  //credits, coding train
   
    
//   }
//   theCatApi();



async function theCatApi(){
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const blobs = await response.json(); //so, instead of converting the response to a blob, I decided to convert it to a json
        //which then gave me the array [] with object and url as one of the keys. Decided to try 'lasering' the url key value and
        //inserted it into the image . BINGOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!! IT WORKED! Let me go have a good night sleep! Old code commented out down below.
       console.log(blobs);
       const images = blobs[0].url;
        document.getElementById('pets').src = images;       //URL.createObjectURL(blobs);  //credits, coding train
       
        
      }
       theCatApi();


//trying to import my key from module1.js
//import { my_Key } from "./modules/module1"; made functionality worst for some reason


//POST
secndBtn.addEventListener('click', getPosting);  

   //somewhat functional though!

//Achieved this block via class notes. Struggled with this part. Turned to lessons as last resot

//import { getPosting } from "./modules/module2"; tried importing code veral times but it impaired functionality for some reason.
async function getPosting(){        
    let enteredInfo = infoBar.ariaValueMax;
    let reqoutput = {data: enteredInfo};
 
    const res = await fetch('https://api.thecatapi.com/v1/images/search', {
     method: 'POST',
     body: JSON.stringify(reqoutput),
     headers: {
         'Content-Type': 'application/json; charset=UTF-8',// credits, class notes
     } 
    });
    alertResponse(res);
 }


async function alertResponse(res) {
    if(res.ok){
        const txtdata = await res.text();
        alert(txtdata);
    } else {
        alert('Request status not 200: ' + res.status);
    }
}



