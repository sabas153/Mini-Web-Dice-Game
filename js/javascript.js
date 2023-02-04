function tirarDado(min, max){
    let num_dado = Math.floor(Math.random() * (max - min)) + min;
    switch(num_dado){
        case 1:
            document.getElementById("dado").setAttribute("src", "img/dado01.png");
        break;
        case 2:
            document.getElementById("dado").setAttribute("src", "img/dado02.png");
        break;
        case 3:
            document.getElementById("dado").setAttribute("src", "img/dado03.png");
        break;
        case 4:
            document.getElementById("dado").setAttribute("src", "img/dado04.png");
        break;
        case 5:
            document.getElementById("dado").setAttribute("src", "img/dado05.png");
        break;
        case 6:
            document.getElementById("dado").setAttribute("src", "img/dado06.png");
        break;
        }
        console.log("Dado: ", num_dado);
        vidaSlime(); 
function vidaSlime(){
    let vida = Number(localStorage.getItem("vida")) || 20;
    vida = vida - num_dado;
    if (vida < 0) {
        vida = 0;
    }
    actualizarVida(vida);
    console.log("Vida: ", vida);
    document.getElementById("stats").innerHTML = `-${num_dado}`;
    document.getElementById("stats").style.opacity = 1;
    setTimeout(function() {
        document.getElementById("stats").style.opacity = 0;
    }, 300);
    document.getElementById("vida").innerHTML = `${vida}/20`;
    localStorage.setItem("vida", vida);
    if (vida <= 0) {
        console.log("Felicidades has matado al slime");
        setTimeout(function() {
            document.getElementById("slime").setAttribute("src", "img/rip.png");
        }, 10);
        setTimeout(function() {
            document.getElementById("stats").innerHTML = ` `
        }, 1000);
        setTimeout(function() {
            document.getElementById("boton").innerHTML = `<input type="button" value="Retry" onclick="restart()" id="reset">`
        }, 1000);
        document.getElementById("dado").removeAttribute("onclick", "tirarDado(1, 7)")
    }
}   
function actualizarVida(vida) {
    // Calcular la anchura de la barra en función de la vida restante
    // var anchura = (vida / 20) * 100;
    var anchura = (vida / 20) * 100;
    // Actualizar la anchura de la barra
    document.getElementById("barraVida").style.width = anchura + "%";
    console.log(anchura);
    // Cambiar el color de la barra a medida que baja
    if (anchura > 0 && anchura <= 25 ) {
      document.getElementById("barraVida").style.backgroundColor = "red";
    } else if (anchura <= 50 && anchura >= 25){
        document.getElementById("barraVida").style.backgroundColor = "orange";
    } else if (anchura <= 0){
        document.getElementById("barraVida").style.backgroundColor = "transparent";
    }
  }
}
function restart(){
    location.reload(true);
    localStorage.clear();
}