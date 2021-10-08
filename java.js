var number = parseInt(Math.random() * 10);
var tentativas = 3;
var gold = 0;
function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
{
tentativa();
return false;
}
else
return true;
}
function reiniciar(){
    tentativas = 3;
    acertou = false;
    document.getElementById("tt").innerHTML = "Advinhe o número do mago!";
    document.getElementById("exibir2").innerHTML = "";
    document.getElementById("exibir").innerHTML = "";
    document.querySelector("#botao").style.display = "";
    document.querySelector("#chute").disabled = false;
    document.getElementById("moedas").style.display = "none";
    document.getElementById("sapo").style.display = "none";
    document.getElementById("chute").value='';
    number = parseInt(Math.random() * 10);
}

function tentativa() {
    var acertou = false;
    var chute = parseInt(document.getElementById("chute").value);
    

    if (chute == number) {
        document.getElementById("moedas").style.display = "";
        document.getElementById("exibir2").innerHTML = "Parabéns! Você acertou.";
        document.getElementById("exibir").innerHTML = "Pegue seus bitcoins!";
        document.getElementById("tt").innerHTML = "<a onclick = 'reiniciar()'> tentar novamente <img class='reiniciar' src = 'https://image.flaticon.com/icons/png/512/82/82004.png'> </img> </a>";
        document.getElementById("moedas").className = "moedas";
        document.getElementById("moedas").src = "https://imagensemoldes.com.br/wp-content/uploads/2020/09/Desenho-Moedas-Dinheiro-Bitcoin-PNG.png";
        acertou = true;
        var audio = new Audio('css/vitoria.mp3');
        document.querySelector("#chute").disabled = true;
        gold = gold + 1;
        chute = 0;
        document.getElementById("gold").innerHTML = gold; 
        audio.addEventListener('canplaythrough', function() {
        audio.play();
        return false;
});
        document.querySelector("#botao").style.display = "none";
    } else if (chute > number) {
        document.getElementById("exibir").innerHTML = "Você errou! o numero magico é menor";
        tentativas--;
        atualizaTentativas(tentativas)
    } else if (chute < number) {
        document.getElementById("exibir").innerHTML = "Você errou! o numero magico é maior";
        tentativas--;
        atualizaTentativas(tentativas)
    }
    if (tentativas == 0 && acertou == false) {
        document.getElementById("sapo").style.display = "";
        document.getElementById("exibir2").innerHTML = "suas tentativas acabaram!";
        document.getElementById("exibir").innerHTML = "vire sapo!";
        document.getElementById("tt").innerHTML = "<a onclick = 'reiniciar()' > tentar novamente  <img class='reiniciar' src = 'https://image.flaticon.com/icons/png/512/82/82004.png'> </img> </a>";
        document.querySelector("#botao").style.display = "none";
        document.getElementById("sapo").className = "sapo";
        document.getElementById("sapo").src = "https://cdn-0.emojis.wiki/emoji-pics/facebook/frog-facebook.png";
        var audio = new Audio('css/loss.mp3');
        audio.addEventListener('canplaythrough', function() {
        audio.play();
        document.querySelector("#chute").disabled = true;
});
    }
}


function atualizaTentativas(tentativas) {
    document.getElementById("exibir2").innerHTML = "Tentativas: " + tentativas + "<br>"
}