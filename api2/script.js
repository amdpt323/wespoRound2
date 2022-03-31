const URL="https://swapi.dev/api/planets/1/"

const list=document.querySelector("#abc");
const h1=document.querySelector(".b2 h1");
const body=document.body;

function getRandomColor(){
   const red=Math.floor(Math.random()*256);
   const green=Math.floor(Math.random()*256);
   const blue=Math.floor(Math.random()*256);
   const randomColor = `rgb(${red},${green},${blue})`;
   return randomColor;
}

list.addEventListener("click",(e)=>{

   const randomColor=getRandomColor();
   body.style.backgroundColor=randomColor;


    const id= (e.target.outerText);
    
    fetch(URL)
     .then(response=>{
        return response.json();
     })
     .then(data=>{
       h1.innerHTML=(data[`${id}`]);
     })
})

    
