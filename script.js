//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');
let mainDiv = document.getElementById('content');

clickBtn.addEventListener('click', theCatApi);


// async function theCatApi(){
//     const respns = await fetch(' https://api.thecatapi.com/v1/images/search');
//     const jsdata = await respns.json();
//    const url = jsdata.message;

//    console.log(respns);
//    console.log(url);
//    const images = document.createElement('img');
//   // mainDiv.appendChild(images);
//    images.src = url;
   
// }
// theCatApi();

//let try again!!!!!!!!!!!!!!!!!!!
async function theCatApi(){
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
    
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 

  //trying to insert content in html
  futureContnt.innerHTML = result;;

}