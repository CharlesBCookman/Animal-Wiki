
let searchFunction = (input) => {
  let turtleInfo = document.querySelector("#turtle-info");
  let cheetahInfo = document.querySelector("#cheetah-info");
  let toadInfo = document.querySelector("#toad-info");
  let hippopotamusInfo = document.querySelector("#hippopotamus-info");
  let dolphinInfo = document.querySelector("#dophin-info");
  
  if(input === "turtles" || input === "turtle"){
    turtleInfo.removeAttribute("class");
  }else if(input === "cheetahs" || input === "cheetah"){
    cheetahInfo.removeAttribute("class");
   } else if(input === "toads" || input === "toad"){
      toadInfo.removeAttribute("class"); 
   }else if(input === "hippopotami" || input === "hippopotamus"){
    hippopotamusInfo.removeAttribute("class");
   }else if(input === "dolphins" || input === "dolphin"){
    dolphinInfo.removeAttribute("class");
    
  }
}

window.onload = () => {
  let searchInput = document.querySelector("#search");

}