
while(true){
    idade = prompt("Quantos anos você tem?");
    if(idade >= 18){
        alert("Você pode jogar !");
        player = prompt("Escolha: 1-PEDRA, 2-PAPEL OU 3-TESOURA?");
        comp = Math.floor(Math.random() * 3) + 1;

        if(player == comp){
            alert("Empate!");
        }
        else if(player == 1 && comp == 2){
            alert("Você perdeu!");
        }
        else if(player == 1 && comp == 3){
            alert("Você ganhou!");
        }
        else if(player == 2 && comp == 1){
            alert("Você ganhou!");
        }
        else if(player == 2 && comp == 3){
            alert("Você perdeu!");
        }
        else if(player == 3 && comp == 1){
            alert("Você perdeu!");
        }
        else if(player == 3 && comp == 2){
            alert("Você ganhou!");
        }
        else{
            alert("Opção inválida!");
        }
    }
    if(idade < 18){
        alert("Você não pode jogar !");
        break;
    }
    alert("Escolha do computador: " + comp);
   
}

