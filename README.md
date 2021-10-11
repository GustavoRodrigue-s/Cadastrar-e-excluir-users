<div>
  <h1>O que é isso? 👨‍💻</h1>
  <p>
    Este texto apresenta detalhadamente as funcionalidades e minhas decisões para a construção desta aplicação web. O objetivo de documentar
    o projeto é para fins educacionais, tanto para me ajudar e ajudar outros desenvolvedores. 
  </p>
</div>

<div>
  <h1>Cadastrar e excluir usuários</h1>
  <p>O projeto tem funcionalidades bem simples, mas o que me fez gostar dele foi em relação á importância na qual eu dei para o código,
    assim deixando-o mais possivel legivel e conciso. O projeto tem como funcionalidade principal, adicionar usuários no banco de dados
    do navegador e poder procurar e excluir cada usuário adicionado. 
  </p>
  <img src="https://user-images.githubusercontent.com/81722068/136706855-f4b86a3a-10f1-4f92-853c-84cbee166dc4.png">
</div>

<div>
  <h1>Features e conceitos utilizados 🛠️</h1>
  <h4>
    Importante: Esse não é o melhor jeito para contruir uma aplicação como esta e com certeza devem existir conceitos e métodos mais fáceis, porém,
    este foi o melhor e mais eficiente jeito que eu achei para fazer.
  </h4>  
  <ul>
    <li>Constantes (para evitar mutações de código)</li>
    <li>Variáveis e funcões autoexplicativas (Os nomes fazem sentido para a funcionalidade de cada objeto)</li>
    <li>Forms (utilizados para facilitar na manipulação de elementos e que fazem sentido dentro deste contexto)</li>
    <li>Melhor legibilidade (variáveis são usadas para conter um grupo de código e nomeadas para resumir a funcionalidade deste grupo)</li>
    <li>IIFE (para mudar o escopo de cada página. O uso delas são mais proveitosos em aplicações grandes porém, são consideradas boas práticas)</li>
    <li>Objetos com arrays (são tipos de dados que juntos são fáceis de utilizar, visando os vários métodos que os dois possuem)</li>
    <li>Design Patterns (a factory function foi utilizado para deixar o código mais direto e conciso, assim não precisando utilizar funções contrutoras ou classes que dificultam a legibilidade)</li>
    <li>Destructuring (usado para obter propriedades de objetos)</li>
  </ul>
</div>

<div>
  <h1>Responsabilidades</h1>
  <p>
    No total o script possuí 5 responsabilidades, que sao divididas em 5 funções, sendo elas: 
  </p>
  <ol>
    <li>Obter o array de usuários do local Storage</li>
    <li>Criar usuário</li>
    <li>Atualizar tabela</li>
    <li>Buscar usuários</li>
    <li>Deletar usuário</li>
  </ol>
</div>
  
<div>
  <h2>Obter o array de usuários do local Storage</h2>  
  <img src="https://user-images.githubusercontent.com/81722068/136864730-949f1941-b4e0-4f52-8db2-669f9a699cf9.png">
  <p>
    O getArrayFromLocalStorage obtém o array do local Storage e armazena na constante getUsersItem, se o getUsersItem for diferente de null ele é covertido para array e retornado, caso contrário, é retornado um array vazio. 
  </p>
</div>
  
  
  
