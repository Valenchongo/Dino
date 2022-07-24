juego = document.getElementById("juego");
dino = document.getElementById("dino");
cactus = document.getElementById("cactus");
position_dinohorizontal = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
i = 0;
j=0;
v=2;
posicion_dinovertical =0;
puntuacion = 0;

cactus.addEventListener("animationiteration",()=>{
puntuacion ++;
posicioncactuz = (Math.random()*100)+480;
console.log(posicioncactuz);
cactus.style.top  = posicioncactuz;
})

setInterval(() => {   //intevalo en el que evalua constantemente los cambios realizados en el juego cada 10 milisegundos
    position_cactushorizontal = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    position_cactusvertical = parseInt(window.getComputedStyle(cactus).getPropertyValue("top"));
    posicion_dinovertical = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    if( 80>= position_cactushorizontal && posicion_dinovertical  >= position_cactusvertical){
        alert("perdiste, tu puntuacion fue de " +puntuacion);
        puntuacion = -1;
        v = 2;
        
    }
   

if((posicion_dinovertical >= 0) && (posicion_dinovertical<=450)){
    h = posicion_dinovertical; 
        h = h+3; 
        dino.style.top = h + "px";
}
     
    
}, 10);

function saltar (){  //funcion salatar
    j=0;
    l = 0;
   if (posicion_dinovertical >= 450){
  jump = setInterval(() => {
    h = posicion_dinovertical; 
    h = h-4.3;
    j++;
    dino.style.top = h + "px";
    if(j >= 35){
        clearInterval(jump);
        i=1;
        j=0;
       }
      
  }, 10);

}
  i = 1;
}

juego.addEventListener("click",saltar);


