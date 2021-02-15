const p1 = {
   score: 0,
   button: document.querySelector("#p1addscore"),
   display: document.querySelector("#p1scoredisplay")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2addscore"),
    display: document.querySelector("#p2scoredisplay")
 }

function updatescores(player , opponent){

    if(wiinerscore !== player.score && isGameOver !== true){
        player.score +=1;
   
        if(player.score === wiinerscore)
        {
           isGameOver = true;
   
           player.display.classList.add("has-text-success");
           opponent.display.classList.add("has-text-danger");
   
           player.button.disabled = true;
           opponent.button.disabled = true;
           
   
          
        }
        player.display.textContent = player.score;
     
   
       }
}






const resetbutton = document.querySelector("#reset");
const playLevel = document.querySelector("#play");

let wiinerscore = 5;
let isGameOver = false; 


const resetGame = function(){
    isGameOver = false;
    
    for(p of [p1 , p2])
    {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success" , "has-text-danger");
        p.button.disabled = false;

    }






}

playLevel.addEventListener("change" , function(e){
     wiinerscore = parseInt (this.value);
     resetGame();
})


resetbutton.addEventListener("click" , resetGame)



p1.button.addEventListener("click" , function(){
      updatescores(p1 , p2);
 
})


p2.button.addEventListener("click" , function(){
    updatescores(p2 , p1);
 
})