/* 
    A função validaCadastro() recebe valores dos input's e realiza a validação, se o 
    usuario não deixou nenhum campo em branco,se não deixou,a função irá executar e 
    enviar os valores para cadastraAd() por parametros,cadastraAd() recebe os valores
    e adicionam em um objeto com o nome de novoAd.

        Significado de cada chave :
            nome: Nome do anuncio
            cliente: Cliente
            investimento: Investimento por dia
            tInvest: Investimento total de acordo com a quantidade de Dias que o cliente investiu.
            tVisu: Total de visualizações obtidas de acordo com o intervalo de tempo que o cliente investiu.
            totalClick: Total de cliques que o anuncio teve durante o intervalo de tempo.
            totalComp: Total de compartilhamentos obtidos durante o intervalo de tempo.
            intervTemp: Intervalo de tempo ,que o anuncio irá permanecer on-line ,escolhido pelo Cliente.
    
    cadastraAd() irá armazenar os dados no localStorage do navegador do usuario e converte o array de objeto em 
    uma string JSON.

    Já a função adicionarDados() irá pegar essa string JSON e converter em um objeto e irá gerar um HTML que irá
    mostrar na tela uma tabela contendo os dados e para cada anuncio cadastrado(JSON armazenado dentro do localStorage),
    irá gerar uma nova linha contendo os valores de cada chave e retronará para a div no html.

    
*/


function validaCadastro(idNomeAd,idCliente,idInvest,idDataI,idDataF){
    let nome = document.getElementById(idNomeAd).value;
    let cliente = document.getElementById(idCliente).value;
    let investimento = document.getElementById(idInvest).value;
    let dataI = document.getElementById(idDataI).value;
    let dataF = document.getElementById(idDataF).value;

    calculadora(investimento);

    /* Calculo do investimento */ 

    function calculadora(investimento){
        var input = investimento;
        const visuShare = 55; 
        const share = 40; 
        const visuDefault = 30;


        if(!(input < 0)){
            var result = visuO_Result();
            var result1 = visuS1_Result();
            var result2 = visuS2_Result();
            var result3 = visuS3_Result();
            var result4 = visuS4_Result();
            var resultFinal = resultadoTotal();

            function visuO_Result(){
                let invest = input;
                let visuO = invest*visuDefault;
                var result = visuO;
                return Math.round(result);
            };

            function visuS1_Result(){
                nshare1 = result / visuShare;
                nshare1Int = Math.floor(nshare1)
                let result1 = nshare1Int*share;
                return result1; 
            };
            
            function visuS2_Result(){
                nshare2 = result1 / visuShare;
                nshare2Int = Math.floor(nshare2)
                let result2 = nshare2Int*share;
                return result2;

            };
            
            function visuS3_Result(){
                nshare3 = result2 / visuShare;
                nshare3Int = Math.floor(nshare3)
                let result3 = nshare3Int*share;
                return result3;
            };
            
            function visuS4_Result(){
                nshare4 = result3 / visuShare;
                nshare4Int = Math.floor(nshare4)
                let result4 = nshare4Int*share;
                return result4;
            };
            
            function resultadoTotal(){
                var resultFinal = result + result1 + result2
                + result3 + result4;
                return resultFinal;  
            }

        }
        return resultFinal;
    }


    var tCompInvest = nshare1Int+nshare2Int+nshare3Int+nshare4Int; // total de compartilhamento por investimento
    let visuPInvest = calculadora(investimento);
    


    /* Calculo da Data */

    function calculaDiferenca(dataI,dataF) {
        var data1 = new Date(dataI);
        var data2 = new Date(dataF);
        var timeDiff = Math.abs(data1.getTime() - data2.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    calculaDiferenca(dataI,dataF);

    

    var intervTempo = calculaDiferenca(dataI,dataF) +1;

    var tComp = tCompInvest*(intervTempo);

    var visuTotal = visuPInvest*(intervTempo);

    var valorTInvest = investimento*intervTempo;

    var tClick = (Math.floor(visuTotal/8.33))*(intervTempo);

    if(nome == '' || cliente == '' || investimento == '' || dataI == 0 || dataF == 0){
        alert('Os campos nao podem ficar vazios !!!');
    }else cadastraAd(nome,cliente,investimento,valorTInvest,visuTotal,tClick,tComp,intervTempo);
}



function cadastraAd(cadNome,cadCliente,cadInvest,valorTInvest,visuTotal,cadClick,cadComp,cadIntervTempo){
    let novoAd = {nome:cadNome,cliente:cadCliente,investimento:cadInvest,tInvest:valorTInvest,tVisu:visuTotal,totalClick:cadClick,totalComp:cadComp,intervTemp:cadIntervTempo}
    let anuncios = localStorage.getItem('anuncios');
    if(anuncios == null){
        anuncios = [];
    } else {
        anuncios = JSON.parse(anuncios);
    }
    anuncios.push(novoAd);
    localStorage.setItem('anuncios',JSON.stringify(anuncios))
    alert('Cadastro realizado com sucesso!!')
    location.reload();
}




function adicionarDados(){
    let anuncios = localStorage.getItem("anuncios")
    if (anuncios == null){
        alert('Ainda não há anuncio cadastrado!!')
    }
    else{
        anuncios = JSON.parse(anuncios);

        var myTableDiv = document.getElementById("tabelaDinamica");

        var table = document.createElement('TABLE');
        table.border = '0';
        
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Nome do Anuncio'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Cliente'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Investimento P/ Dia'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Intervalo de Tempo'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Total investido'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Total de Visu'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Total de Compartilhamento'));
        tr.appendChild(th1);
        var th1 = document.createElement('TH');
        th1.width = '75';
        th1.appendChild(document.createTextNode('Total de Cliques'));
        tr.appendChild(th1);
        


        anuncios.forEach(anuncio => {
            
            for (var i = 0; i < 1; i++) {
                var tr = document.createElement('TR');
                tableBody.appendChild(tr);
            
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.nome));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.cliente));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode('R$'+ anuncio.investimento));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.intervTemp + ' Dias'));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode('R$'+ anuncio.tInvest));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.tVisu));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.totalComp));
                tr.appendChild(td);
                }
                for (var j = 0; j < 1; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(anuncio.totalClick));
                tr.appendChild(td);
                }
            }
            myTableDiv.appendChild(table);

        });
        document.getElementById('resetar').style = "display:block;";
    }
}