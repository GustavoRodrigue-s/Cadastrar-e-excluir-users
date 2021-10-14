<div>
  <h1>O que é isto? 👨‍💻</h1>
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
  <h1>Tecnologias utilizadas</h1>
  <a href="https://github.com/gustavorodriguesf/Cadastrar-e-excluir-users">
    <img align="center" width="40" height="30" alt="Gustavo-Html5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    <img align="center" width="40" height="30" alt="Gustavo-Css3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    <img align="center" width="40" height="30" alt="Gustavo-JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  </a>
</div>

<div>
  <h1>Features e conceitos utilizados 🛠️</h1>
  <h4>
    Importante: Este não é o melhor jeito para contruir uma aplicação como essa e com certeza devem existir conceitos e métodos mais fáceis, porém,
    este foi o melhor e mais eficiente jeito que eu achei para fazer.
  </h4>  
  <ul>
    <li>Constantes (para evitar mutações de código)</li>
    <li>Variáveis e funcões autoexplicativas (Os nomes fazem sentido para a funcionalidade de cada objeto)</li>
    <li>Forms (utilizados para facilitar na manipulação de elementos e que fazem sentido dentro deste contexto)</li>
    <li>Melhor legibilidade (variáveis são usadas para conter um grupo de código e nomeadas para resumir a funcionalidade deste grupo)</li>
    <li>IIFE (para mudar o escopo de cada página. O uso delas são mais proveitosos em grandes aplicações porém, são consideradas boas práticas)</li>
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
    O <strong>getArrayFromLocalStorage()</strong> obtém o array do local Storage e armazena na constante <strong>getUsersItem</strong>, se o <strong>getUsersItem</strong> for diferente de null ele é covertido para array e retornado, caso contrário, é retornado um array vazio. 
  </p>
</div>
  
<div>
  <h2>Criar usuário</h2>
  <img src="https://user-images.githubusercontent.com/81722068/137212839-e52a5822-132a-4252-bcea-a3c305fa62a3.png">
  <p>
    Na função <strong>createUserForLocalStorage()</strong> eu usei o evento de submit, isso porque, dentro do contexto em que o usuário precisa inserir e enviar informações, o uso do form é semântico e também para facilitar na captura de elementos. O método <strong>preventDefault()</strong> é usado para parar o evento de atualizar a página causado pelo evento submit. Duas constantes são declaradas com a syntax do destructuring obtendo assim da tag form, dois elementos que possuem o atributo name "inputUsername" e "inputAge". O <strong>arrayForUsers</strong> obtém o array retornado pela função. A constante <strong>user</strong> chama a <em>factory function</em>, ela cria e retorna um objeto (O objeto é envolvido em parênteses para ser retornado implicitamente pela arrow function) e logo em seguida esse objeto é adicionado em última posição do array com o método push(). O <strong>arrayForUsers</strong> é setado no local storage covertido para string com o JSON e depois a função <strong>updateTable()</strong> é chamada.
  </p>
</div>
  
<div>
  <h2>Atualizar tabela</h2>
  <img src="https://user-images.githubusercontent.com/81722068/137231878-b2f55010-e615-4a37-9439-af8f88bb8d12.png">
  <p>
    A <strong>updateTable()</strong> possuí um parâmetro <strong>arry</strong>, caso esse parâmetro seja undefined, ela vai receber o array retornado da função <strong>getArrayFromLocalStorage</strong> e a constante <strong>arrayForUsers</strong> recebe esse parâmetro. O <strong>tbody_user</strong> (aonde todos usuários da tabela ficam) é "limpado" e logo em seguida o <strong>arrayForUsers</strong> é percorrido pelo método <em>forEach</em> e o <strong>tbody_user</strong> printa todos usuários do array (eu deixei o id no data-id porque para o usuário não é importante saber o id). E por último, todos table rows recebem um evento de click para serem deletados. A <strong>updateTable()</strong> é chamada para printar os usuários ao carregar a página.
  </p>
</div>
  
  
  
