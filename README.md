# Projeto Escolar API

- Este é um projeto simples de uma API para uma escola, desenvolvido com Node.js, ORM Prisma, Express e TypeScript.

## License

[license](./LICENCE)

## Instalação

- Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, siga os passos abaixo:

## Clone o repositório:

```shell
   git clone git@github.com:reinaldoper/escola-prisma.git
```

## Instale as dependências:

`cd escola-prisma`

`npm install`


## Inicie o servidor:

`npm run dev`


## Endpoints

- Rotas de Professor

- POST /api/professor
- Adiciona um novo professor

### Payload esperado:

```shell
{
  "nome": "Nome do Professor",
  "disciplina": "Disciplina do Professor",
  "email": "email@exemplo.com"
}
```

### UM GET retornara a lista de professores cadastrados, sua disciplina e a lista de alunos

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

## Rotas de Alunos

- POST /api/aluno
- Adiciona um novo aluno.

### Payload esperado:

```shell
{
  "nome": "Nome do Aluno",
  "email": "email@exemplo.com",
  "professorId": 1
}
```

## Rota de Notas

- POST /api/notas
- Adiciona uma nova nota.

### Payload esperado:

```shell
{
  "nome": "Nome do Aluno",
  "valor": 8.5
}
```

## Rota de Diretor

- POST /api/diretor
- Adiciona um novo diretor.

### Payload esperado:

```shell
{
  "nome": "Nome do Diretor",
  "email": "email@exemplo.com"
}
```


### Rota da API com deploy:

`https://escola-prisma.vercel.app/`







