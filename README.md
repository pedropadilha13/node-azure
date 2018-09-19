# node-azure

#### Na sua máquina:

1. ```git clone <repo-url>```
2. ```npm install express-generator```
3. ```express --view=pug nome-do-projeto``` (mesmo nome do diretório clonado)
Quando for pedido, digite y para continuar a criar no diretório do repositório clonado
4. ```cd nome-do-projeto```
5. ```npm install```
6. ```npm run start```
    Depois, navegue para localhost:3000

#### No Azure:

1. Create New Resource
    1. Node JS Empty Web App
    2. Escolher o App Name, Subscription e Resource Group (Esperar o deploy)
3. Depois de criado o recurso:
    1. Application Settings
    2. Application Settings
    3. Add new setting
    4. WEBSITE_NODE_DEFAULT_VERSION 8.9.4
    5. Save
4. Deployment Options
    1. Disconnect > Yes
    2. Setup > GitHub > Entre na sua conta
    3. Escolha o repositório correto
    4. Clique no último commit e faça o deploy
5. Na página do recurso, procure por "Editor", clique nele e depois em Go
    1. Na aba Console
        1. ```npm install```
    2. Run (Ctrl + F5)