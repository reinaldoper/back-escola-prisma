export const dataBoard = [
  {
    "id": 2,
    "nome": "Marcela das Neves",
    "role": "ADMIN",
    "disciplina": "matematica",
    "email": "marcela_neves@school.com",
    "createdAt": "2024-01-30T10:06:14.545Z",
    "alunos": [
      {
        "id": 10,
        "nome": "Marcos da Silva",
        "idade": 23,
        "email": "marcos@gmail.com",
        "role": "USER",
        "createdAt": "2024-02-15T16:29:24.776Z",
        "professorId": 2
      }
    ]
  },
  {
    "id": 4,
    "nome": "Joao Castelo Branco",
    "role": "ADMIN",
    "disciplina": "portugues",
    "email": "joao_castelo@school.com",
    "createdAt": "2024-01-30T11:00:47.682Z",
    "alunos": [
      {
        "id": 5,
        "nome": "Giovanna",
        "idade": 24,
        "email": "gi@email.com",
        "role": "USER",
        "createdAt": "2024-01-30T19:18:51.452Z",
        "professorId": 4
      },
      {
        "id": 6,
        "nome": "Joao Paulo",
        "idade": 45,
        "email": "joao@email.com",
        "role": "USER",
        "createdAt": "2024-01-30T19:39:13.498Z",
        "professorId": 4
      }
    ]
  },
  {
    "id": 5,
    "nome": "Reinaldo Pereira",
    "role": "ADMIN",
    "disciplina": "programacao",
    "email": "reinaldo@school.com",
    "createdAt": "2024-01-30T11:24:18.954Z",
    "alunos": [
      {
        "id": 7,
        "nome": "Rafaela Silva",
        "idade": 19,
        "email": "rafa@gmail.com",
        "role": "USER",
        "createdAt": "2024-01-30T19:50:50.968Z",
        "professorId": 5
      },
      {
        "id": 9,
        "nome": "Matheus Henrique",
        "idade": 23,
        "email": "henrique@hotmail.com",
        "role": "USER",
        "createdAt": "2024-02-14T18:13:13.724Z",
        "professorId": 5
      },
      {
        "id": 8,
        "nome": "Maria de Paula",
        "idade": 25,
        "email": "maria@hotmail.com",
        "role": "USER",
        "createdAt": "2024-01-30T20:00:41.301Z",
        "professorId": 5
      },
      {
        "id": 14,
        "nome": "Reinaldo",
        "idade": 19,
        "email": "reinaldo@outlook.com",
        "role": "USER",
        "createdAt": "2024-02-26T18:15:03.582Z",
        "professorId": 5
      },
      {
        "id": 16,
        "nome": "Marcos Paulo da Silva",
        "idade": 19,
        "email": "marcos@outlook.com",
        "role": "USER",
        "createdAt": "2024-02-26T18:25:02.896Z",
        "professorId": 5
      }
    ]
  },
  {
    "id": 6,
    "nome": "Josefina Costantina",
    "role": "ADMIN",
    "disciplina": "historia",
    "email": "josefuna@school.com",
    "createdAt": "2024-01-30T11:26:26.807Z",
    "alunos": [
      {
        "id": 3,
        "nome": "João Pedro da Silva",
        "idade": 21,
        "email": "joaopedro@gmail.com",
        "role": "USER",
        "createdAt": "2024-01-28T11:53:59.410Z",
        "professorId": 6
      },
      {
        "id": 1,
        "nome": "Pedro Paulo Diniz",
        "idade": 19,
        "email": "pedro@gmail.com",
        "role": "USER",
        "createdAt": "2024-01-28T11:50:03.077Z",
        "professorId": 6
      }
    ]
  }
]
export const dataBoardId = {
  "id": 8,
  "nome": "Maria de Paula",
  "role": "USER",
  "email": "maria@hotmail.com",
  "professor": {
    "id": 5,
    "nome": "Reinaldo Pereira",
    "email": "reinaldo@school.com",
    "createdAt": "2024-01-30T11:24:18.954Z",
    "role": "ADMIN",
    "disciplina": "programacao"
  },
  "createdAt": "2024-01-30T20:00:41.301Z",
  "notas": []
}

export const dataBoardPostStudent = {
  nome: 'Reinaldo',
  email: 'reinaldo@outlook.com',
}

export const dataBoardPutError = {
  professorId: 5
}

export const dataBoardPostStudentCorrect = {
  nome: 'Marcos Paulo da Silva',
  email: 'marcos@outlook.com',
  idade: 19,
  professorId: 5
}