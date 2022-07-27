juego = document.getElementById("juego");
dino = document.getElementById("dino");
cactus = document.getElementById("cactus");
contador = document.querySelector(".contador");
bocaa = document.querySelector(".bocaa");
position_dinohorizontal = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
sombrero = document.querySelector(".sombreropre10");
sombreropuesto = false;
i = 0;
j=0;
v=2;
posicion_dinovertical =0;
puntuacion = 0;
saltando = false

cactus.addEventListener("animationiteration",()=>{
puntuacion ++;
posicioncactuz = (Math.random()*100)+480;
cactus.style.top  = posicioncactuz;
if((puntuacion % 10) == 0 && puntuacion != 0){
  contador.style.color = "blueviolet"
}else{
  contador.style.color = "white"
}
contador.innerHTML = puntuacion;
})

setInterval(() => {   //intevalo en el que evalua constantemente los cambios realizados en el juego cada 10 milisegundos
    position_cactushorizontal = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    position_cactusvertical = parseInt(window.getComputedStyle(cactus).getPropertyValue("top"));
    posicion_dinovertical = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    posicion_sombrerovertical = parseInt(window.getComputedStyle(sombrero).getPropertyValue("top"));

    if( 80>= position_cactushorizontal && posicion_dinovertical  >= position_cactusvertical){
        alert("perdiste, tu puntuacion fue de " +puntuacion);
        
        if(sombreropuesto == true){
          sombreropuesto = false;
          sombrero.classList.replace("sombreropuesto","sombreropre10");
        }
        puntuacion = -1;
        v = 2;
        
    }
 
if(puntuacion == 10){
  sombrero.classList.replace("sombreropre10","sombrero");
} 

if(puntuacion == 11){
  sombrero.classList.replace("sombrero","sombreropuesto");
  sombreropuesto = true;

}

if(sombreropuesto == true){
  console.log("culo")
   sombrero.style.top = posicion_dinovertical-170 +"px";
}


if((posicion_dinovertical >= 0) && (posicion_dinovertical<=370)){
    h = posicion_dinovertical; 
        h = h+3; 
        dino.style.top = h + "px";
        bocaa.classList.replace("boca","bocaabierta")
        
}else{
  bocaa.classList.replace("bocaabierta","boca")
}
    
    
   
}, 10);

function saltar (){  //funcion salatar
    j=0;
    l = 0;
   if (posicion_dinovertical >= 371){
    
  jump = setInterval(() => {
    h = posicion_dinovertical; 
    h = h-4.3;
    j++;
    dino.style.top = h + "px";
    if(j >= 25){
        clearInterval(jump);
        i=1;
        j=0;
       }
       
       saltando = true;
       
  }, 10);
  
}

  i = 1;
}

juego.addEventListener("click",saltar);

