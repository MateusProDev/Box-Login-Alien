/*var nome = prompt('Qual é o seu nome?');

document.write('Olá, ' + nome + ', seja bem vindo(a)!');
*/

var nomeId = document.getElementById("nomeId");
var buttonId = document.getElementById("buttonId");
var spaceRetur = document.getElementById("spaceRetur");
var saudacao = false

buttonId.addEventListener('click', function() {
    var nome = nomeId.value.trim();

    if (nome !== "") {
        var novaDiv = document.createElement('div');
        novaDiv.textContent = 'Olá, ' + nome + ', Seja bem vindo!';

        spaceRetur.appendChild(novaDiv);
        saudacao = true
    }
    else{
        alert('Insira seu nome'); 
    }

});
