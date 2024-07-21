//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', theCatApi);


async function theCatApi(){
    const respns = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsdata = await respns.json();
   const url = jsdata.message;

   console.log(respns);

   const imgPlaceholder = document.createElement('img');
   futureContnt.innerHTML = imgPlaceholder;
   imgPlaceholder.src = url;
}