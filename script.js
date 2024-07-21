//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');
let mainDiv = document.getElementById('content');

clickBtn.addEventListener('click', theCatApi);


async function theCatApi(){
    const respns = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsdata = await respns.json();
   const url = jsdata.message;

   console.log(respns);
   console.log(url);
   const images = document.createElement('img');
   mainDiv.appendChild(images);
   images.src = url;
   
}
theCatApi();