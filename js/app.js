let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;


function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    if ( ingresso == 'inferior'){
        qtdInferior = qtdInferior - qtd;
        if ( qtdInferior >= 0){
            document.getElementById('qtd-inferior').textContent = `${qtdInferior}`;
        } else{
            alert('Ingressos Esgotados');
        }
        
        
    }else if ( ingresso == 'superior'){
        qtdSuperior = qtdSuperior - qtd;
        if ( qtdSuperior >= 0){
            document.getElementById('qtd-superior').textContent = `${qtdSuperior}`;
        } else{
            alert('Ingressos Esgotados');
        }
       
    }else {
        qtdPista = qtdPista - qtd;
        if ( qtdPista >= 0){
            document.getElementById('qtd-pista').textContent = `${qtdPista}`;
        } else{
            alert('Ingressos Esgotados');
        }

    }

    
}