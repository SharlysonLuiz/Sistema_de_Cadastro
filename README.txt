/* DESCRIÇÃO*/

Sistema_de_cadastro é um simples programa web de cadastro a fim de cadastrar anuncios preenchendo os dados e 
retornando uma tabela com o resultado dos dados passados pelo cliente.A tabela exibe dados como o total de 
cliques que o anuncio recebeu,total de visualização,valor investido total,mediante a quantidade de dias que 
o cliente optou em selecionar,entre outros dados.




/* DOCUMENTAÇÃO */

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





/* COMO EXECUTAR */

O sistema pode ser executado abrindo o arquivo index.html.





/*INSTRUÇÕES*/

O usuario ira preencher os inputs e clicar em CADASTRAR,logo após em OK quando para confirmar o 
cadastro.Para ver o relátorio,contendo todos os cadastros feitos,clique no botão RELATORIO.

O usuario ainda poderá clicar em LIMPAR para limpar todos os Campos.

Após clicar em RELATORIO,o usuario poderá fechar o mesmo apertando no botão FECHAR logo abaixo da tabela.








