# Clean Architecture Node.js
Este projeto é uma implementação básica de Clean Architecture utilizando Node.js e Express. Ele segue os princípios de modularidade e separação de responsabilidades, permitindo fácil manutenção e escalabilidade.

## 🛠️ Estrutura do Projeto
A estrutura do projeto segue a organização recomendada pela Clean Architecture, dividindo responsabilidades em camadas bem definidas:
```bash
clean-architecture-node/
├── src/
│   ├── application/       
│   │   └── usecases/
│   │       └── user/
│   │           └── createUser.js
│   ├── domain/            
│   │   ├── entities/
│   │   │   └── user/
│   │   │       └── user.js
│   │   └── repositories/
│   │       └── userRepository.js
│   ├── infrastructure/    
│   │   ├── dao/
│   │   │   └── userRepo.js
│   │   └── express/
│   │       └── routes.js
│   └── index.js          
├── package.json           
```
## Descrição das Pastas
- **application/usecases: Casos de uso que implementam as regras de aplicação e orquestram as interações entre as camadas.**
- **domain/entities: Contém as entidades principais do domínio e suas regras.**
- **domain/repositories: Define as interfaces para persistência e manipulação de dados.**
- **infrastructure/dao: Implementações concretas das interfaces definidas na camada de domínio (exemplo: repositórios que simulam ou acessam o banco de dados).**
- **infrastructure/express: Configuração das rotas e integração com o framework Express.**
- **index.js: Ponto de entrada que inicializa a aplicação.**

## 🚀 Como executar o projeto
- **Pré-requisitos**
Certifique-se de ter o seguinte instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- **Passos para rodar o projeto**
1- Clone este repositório:
```bash
git clone https://github.com/Kassiaavieira/cleanArchitecture.git
```
2- Instale as dependências:
```bash
npm install
```
3- Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```
4- O servidor estará rodando em: http://localhost:3000

## 🧪 Testando a API
Utilize ferramentas como Postman ou Insomnia para interagir com a API.
- **Rota: Criar Usuário**
```bash
POST http://localhost:3000/api/users
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```