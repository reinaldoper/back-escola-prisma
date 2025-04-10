# 📚 Projeto API Escolar

Este projeto consiste em uma API voltada para a gestão de dados escolares, desenvolvida utilizando **Node.js**, **Express**, **Prisma ORM** e **TypeScript**.

A API permite o gerenciamento de professores, alunos, notas e diretores, com funcionalidades básicas de cadastro e consulta.

---

## 📄 Licença

Este projeto está licenciado sob os termos definidos no arquivo [LICENSE](./LICENCE).

---

## ⚙️ Instalação e Execução

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### 1. Clone o repositório

```bash
git clone git@github.com:reinaldoper/escola-prisma.git

```

## Instale as dependências:

`cd escola-prisma`

`npm install`

## Antes de rodar o servidor, ajuste o .env:

`DATABASE_URL="seu_bando_de_dados_postgresql"
 PORT=3001`


## Inicie o servidor:

`npm run dev`


## 🔌 Endpoints Disponíveis

- ➕ Cadastrar Professor

- POST /api/professor
>Adiciona um novo professor

### Payload esperado:

```shell
{
  "nome": "Nome do Professor",
  "disciplina": "Disciplina do Professor",
  "email": "email@exemplo.com"
}
```

## 📄 Listar Professores:

- GET /api/professor
>Retorna todos os professores cadastrados, suas disciplinas e respectivos alunos.

```shell
message": [
{
"nome": "Jorge Luiz dos Santos",
"disciplina": "hitória",
"createdAt": "2024-01-28T10:40:54.791Z",
"alunos": [
{
"id": 1,
"nome": "Pedro Paulo Diniz",
"idade": 19,
"email": "pedro@gmail.com",
"createdAt": "2024-01-28T11:50:03.077Z",
"professorId": 1
},
{
"id": 3,
"nome": "João Pedro da Silva",
"idade": 21,
"email": "joaopedro@gmail.com",
"createdAt": "2024-01-28T11:53:59.410Z",
"professorId": 1
}
]
}
```

## 👨‍🎓 Alunos
- ➕ Cadastrar Aluno

- POST /api/aluno
>Cadastra um novo aluno e o associa a um professor existente.

### Payload esperado:

```shell
{
  "nome": "Nome do Aluno",
  "email": "email@exemplo.com",
  "professorId": 1
}
```

## 📝 Notas

- ➕ Registrar Nota

- POST /api/notas
>Registra uma nova nota para um aluno.

### Payload esperado:

```shell
{
  "nome": "Nome do Aluno",
  "valor": 8.5
}
```

## 🧑‍💼 Diretores
- ➕ Cadastrar Diretor

- POST /api/diretor
>Adiciona um novo diretor.

### Payload esperado:

```shell
{
  "nome": "Nome do Diretor",
  "email": "email@exemplo.com"
}
```


## 🌐 Deploy:

`https://escola-prisma.vercel.app/`







