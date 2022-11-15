/*-----------mes variables----------*/

let score = 0;
let clicker = 1;
let autoClicker = 0;
let prixclicker = 10;
let prixautoclicker = 1000;

/*-----------score----------*/
/*cliquer sur l'écran pour ajouter 1 score*/
document.getElementById("score").addEventListener("click", function () {
  score = score + clicker;
  display_score();
});


/*Multiplicateur de clique et son prix qui augmente et se multiplie par 2 à chaque fois que l'on récupère un clique en plus*/
document.getElementById("buy").addEventListener("click", function () {
  if (score >= prixclicker) {
    clicker = clicker + 1;
    score -= prixclicker;
    prixclicker = prixclicker*2;
    

    document.getElementById("clicker").innerText = "x" + clicker;
    document.getElementById("prixclicker").innerHTML = prixclicker + " clicks"
    display_score();
  }
});


/*Autoclicker et son prix qui augmente et se multiplie par 2 à chaque fois que l'on achète un multiplicateur en plus*/
function manage_autoclickers() {
  score = score + clicker * autoClicker;
  display_score();
}
function display_score() {
  document.getElementById("scoreText").innerText = "Points : " + score;
}

document.getElementById("buy-auto-clicker").addEventListener("click", function () {
    if (score >= prixautoclicker) {
      autoClicker = autoClicker + 1;
      score -= prixautoclicker;
      prixautoclicker = prixautoclicker *2;
      document.getElementById("auto-clickers").innerText = "x" + autoClicker;
      document.getElementById("prixautoclicker").innerHTML = prixautoclicker + " clicks" 
      display_score();
    }
  });

setInterval(manage_autoclickers, 1000);