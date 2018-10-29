
# node-azure

#### Projeto modelo de Pesquisa e Inovação (1º semestre ADS 2018-2)

## Conteúdo

### [Database.js](Database.js)
#### Arquivo genérico de conexão com o banco de dados
   ```query```: função que executa uma query, passada como parâmetro - retorna uma Promise

### [config.json](config.json)
#### Arquivo que contém configurações gerais do projeto (ex: parâmetros de conexão com o banco de dados)

### [public/chart.html](public/chart.html)
#### Arquivo que demonstra a exibição do gráfico de temperatura e umidade, populado com dados do banco de dados configurado no arquivo [config.json](config.json)

### [routes](routes/)
#### Diretório que contém as rotas do servidor

- ### [routes/index.js](routes/index.js)
	- #### GET /
		- Usuário logado: renderiza a view index
		- Usuário não logado: renderiza a view login

- ### [routes/leitura.js](routes/leitura.js)
	- #### GET / -> retorna um JSON com as últimas 50 leituras, no formato que o 	banco de dados devolveu
	- #### GET /dt -> retorna um JSON com as últimas 50 leituras, no formato [DataTable](https://developers.google.com/chart/interactive/docs/reference#DataTable), utilizado para construir o gráfico com a biblioteca [Google Charts](https://developers.google.com/chart).

- ### [routes/login.js](routes/login.js)
	- #### GET /
		- Usuário logado: renderiza a view `index`
		- Usuário não logado: renderiza a view `login`
	- #### POST /
		- Usuário e senha corretos: renderiza a view `index`
		- Usuário e/ou senha incorretos: renderiza a view `login`, com a mensagem de erro `'Invalid usernamename/password!'`.

- ### [routes/logout.js](routes/logout.js)
	- #### GET
		- Destrói a `session`

- ### [routes/signup.js](routes/signup.js)
	- #### GET
		- Renderiza a view `signup`
	- #### POST
		-	Recebe no corpo da requisição os dados de cadastro
		-	Caso o usuário já seja cadastrado, não cadastra novamente e retorna a mensagem de erro `'User already exists!'`
		-	Caso o usuário não seja cadastrado, insere o registro no banco e redireciona para a página de [login](routes/login.js), com a mensagem `'User ${username} created succesfully! Please log in...'`, onde username é o nome do usuário recém criado

### [script.js](script.js)
#### Arquivo que contém funçoões genéricas, usadas em diversos arquivos
		Ex.: isNull

### [temp_um/temp_um.ino](temp_um/temp_um.ino)
#### Sketch que faz a leitura da temperatura e umidade do sensor [DHT11](https://www.adafruit.com/product/386) e manda os dados via porta serial para o computador

### [tabelas.sql](tabelas.sql)
#### Script de criação das tabelas utilizadas neste exemplo

### [views](views/)
#### Diretório que contém as views

### [views/error.ejs](views/error.ejs)
#### Renderizada quando ocorre um erro "não tratado"

### [views/index.ejs](views/index.ejs)
#### Tela principal - view renderizada quando um usuário logado tenta acessar as seguintes rotas: `'/', '/index', '/login'`

### [views/login.ejs](views/login.ejs)
#### Formulário de login - view renderizada quando um usuário não logado tenta acessar as seguintes rotas: `'/', '/index', '/login'`

### [views/signup.ejs](views/signup.ejs)
#### Formulário de cadastro - view renderizada quando um usuário acessa a rota `'/signup'`

## Issues
#### Caso tenha algum problema e/ou sugestão, sinta-se à vontade para abrir uma [issue](https://github.com/pedropadilha13/node-azure/issues)

## Dúvidas
#### Em caso de dúvida, você pode me mandar um e-mail em qualquer um dos seguintes endereços:
- contato@pedropadilha.com
- pedropadilha@me.com
- pedropadilhafarroco@hotmail.com
