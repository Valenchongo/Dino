juego = document.getElementById("juego");
dino = document.getElementById("dino");
cactus = document.getElementById("cactus");
contador = document.querySelector(".contador");
bocaa = document.querySelector(".bocaa");
position_dinohorizontal = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
sombrero = document.querySelector(".sombreropre10");
tubo =  document.querySelector(".tubo");
bujero =  document.querySelector(".agujero");
suelo = document.querySelector(".suelo");
divrecord = document.querySelector(".record")
nuevorecord = parseInt (divrecord.innerHTML);
sombreropuesto = false;
i = 0;
j=0;
v=2;
posicion_dinovertical =0;
puntuacion =0;
saltando = false
n=0;
record = 0;

function saltar (){  //funcion salatar
  
    j=0;
    l = 0;
    if(sombreropuesto == false){
   if (posicion_dinovertical >= 371){
    
  jump = setInterval(() => {
    h = posicion_dinovertical; 
    h = h-12;
    j++;
    dino.style.top = h + "px";
    if(j >= 13){
        clearInterval(jump);
        i=1;
        j=0;
       } 
       saltando = true;     
  }, 10);  
}
}else{
  jump = setInterval(() => {
    h = posicion_dinovertical; 
    h = h-8;
    j++;
    dino.style.top = h + "px";
    if(j >= 25){
        clearInterval(jump);
        i=1;
        j=0;
       } 
       saltando = true;     
  }, 4);  
}
}  

bujero.addEventListener("animationiteration" ,()=>{
  posicionagujero = -((Math.random()*350)+314)
  posicionmaxbujero =570+posicionagujero;
  posicionminbujero = 670+posicionagujero;
  bujero.style.top = posicionagujero +"px";
  posagujero = bujero.style.top
 
  if(puntuacion>=11){
    puntuacion++
    record++;
  contador.innerHTML = puntuacion;
  }
})

cactus.addEventListener("animationiteration",()=>{
puntuacion ++;
record++;
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
    possombrero = parseInt(sombrero.style.top);
    console.log(possombrero)

    if(sombreropuesto == false){     /*esto sucede en el game cuando no tenemos el sombrero*/ 
    tubo.style.backgroundColor ="none"
    bujero.style.backgroundColor = " none"
    suelo.style.display = "flex"
    cactus.style.display = "flex"
    
    if( 80>= position_cactushorizontal && posicion_dinovertical  >= position_cactusvertical){
       
      alert("perdiste, tu puntuacion fue de " +puntuacion);
      
        
        if(puntuacion == 10){
          sombrero.classList.replace("sombrero","sombreropre10");
        
        }
        puntuacion = -1;
        v = 2;
        
        if (record>=nuevorecord){
          divrecord.innerHTML = record;
          nuevorecord = parseInt (divrecord.innerHTML);
        }
        record = -1;
        sombrero.style.top = "150px"
        dino.style.top ="370px"; 
    }
 
if(puntuacion == 10){
  sombrero.classList.replace("sombreropre10","sombrero");
} 

if(puntuacion == 11){
  sombrero.classList.replace("sombrero","sombreropuesto");
  sombreropuesto = true;

}
if((posicion_dinovertical >= 0) && (posicion_dinovertical<=370)){
  h = posicion_dinovertical; 
      h = h+3; 
      dino.style.top = h + "px";
      bocaa.classList.replace("boca","bocaabierta")
      
}else{
bocaa.classList.replace("bocaabierta","boca")
}

}
if(sombreropuesto == true){   /*esto sucede en el game cuando tenemos el sombrero puesto*/ 

if (n == 0){
  dino.style.top = "20px";
}
n++
  tubo.style.backgroundColor ="green"
  tubo.style.display ="flex"
  bujero.style.display = " flex"
  bujero.style.backgroundColor= "#040015"
  suelo.style.display = "none"
  cactus.style.display = "none"
  leftpj = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
  lefttubo =parseInt(window.getComputedStyle(tubo).getPropertyValue("left"));
  posicionpj = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
  sombrero.style.top = posicion_dinovertical-64 +"px";
  
  

    h = posicion_dinovertical; 
        h = h+3; 
        dino.style.top = h + "px";
        bocaa.classList.replace("boca","bocaabierta")
        
  

  if(lefttubo<=leftpj+25){
    if( (posicionpj <= posicionmaxbujero+15 )|| (posicionpj>=posicionminbujero+20) ){
      alert("tu puntuacion es de "+puntuacion)
      puntuacion = 0;
      n=0;
      contador.innerHTML = puntuacion;
      sombreropuesto = false;     
      tubo.style.display = "none"
          bujero.style.display ="none"
          sombreropuesto = false;
          sombrero.classList.replace("sombreropuesto","sombreropre10");
          sombrero.style.top = "150px"

          if (record>=nuevorecord){
            divrecord.innerHTML = record;
            nuevorecord = parseInt (divrecord.innerHTML);
          }
          record = -1;
          dino.style.top = "370px";
    }        
  } 
  
  if(posicionpj>=380 || posicionpj <= -90){
    alert("tu puntuacion es de "+puntuacion)
      m = 0;
      n=0;
      puntuacion = 0;
      contador.innerHTML = puntuacion;
      sombreropuesto = false;     
      tubo.style.display = "none"
          bujero.style.display ="none"
          sombreropuesto = false;
          sombrero.classList.replace("sombreropuesto","sombreropre10");
          dino.style.top ="370px";          
          if (record>=nuevorecord){
            divrecord.innerHTML = record;
            nuevorecord = parseInt (divrecord.innerHTML);
          }
          record = -1;
          sombrero.style.top = "150px"
  }

}
   
}, 10);

juego.addEventListener("click",saltar);
