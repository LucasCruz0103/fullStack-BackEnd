# Projeto BackEnd

Objetivo dessa Api é criar um cadastro de clientes que poderá conter muitos contatos associados. Depois deste processo deverá ter um relatório em tela, ou PDF que mostre dados do cliente e os contatos vinculados a este cliente.
<br>

# **Iniciando a instalação**

Para inicializar este projeto, é necessário utilizar o comando abaixo para instalar todas as dependências:

```
yarn install
```

<br>

**Configure as variáveis de ambiente no arquivo .env**, passando suas credenciais para se conectar ao seu banco de dados local.

Tendo feito isso, basta executar o comando abaixo para inicializar a aplicação:

```
yarn dev
```

<br>

## 🛠️ Principais tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- Typeorm
- PostgreSQL
- Bcrypt
- Jsonwebtoken
- Yup

<br>

# Persistindo as migrations no banco de dados
- yarn typeorm migration:run -d src/data-source.ts


# 📋 Documentação

## Cadastro de usuários

- ### POST /users

Body

```json
{
  "fullName": "user",
  "email": "user@mail.com",
  "password": "user123@",
  "confirmPass": "user123@",
  "telephone": "21999999999"
}
```

Retorno esperado - 201

```json
{
  "createdAt": "Fri Mar 31 2023 15:51:47 GMT-0300 (Horário Padrão de Brasília)",
  "telephone": "21999999999",
  "email": "user@mail.com",
  "fullName": "user",
  "id": "7ef1adab-edaa-4970-9a4e-6eeaab17178c"
}
```

> Password min (8) caracteres max (120) caracteres, min numeros (1) and caracteres especiais min (1)

> telephone deve ter 11 números

# Possíveis erros

status - 409

```Json
{
    "message":"User already exists"
}
```

status - 401

```Json

{
    "message":"You dont have authorization for this field"
}
```

## Login

- ## POST/users/login

```Json
{
    "email": "user@mail.com",
    "password": "user123@"
}
```

Retorno esperado - 200

```Json

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAyODk4ODUsImV4cCI6MTY4MDM3NjI4NSwic3ViIjoiN2VmMWFkYWItZWRhYS00OTcwLTlhNGUtNmVlYWFiMTcxNzhjIn0.nQqLEukNOxOpqt06auUP9pteCKoCRbxOjKOI-RdLAPw"
}
```

# Possíveis erros

status - 403

```Json

{
    "message":"Wrong email or password"
}
```

Status - 400

```json
{
  "message": ["email is a required field", "password is a required field"]
}
```

## Listar Usuario Por Id

- ## GET/users/:Id

Retorno esperado - 200

```Json

{
	"id": "7ef1adab-edaa-4970-9a4e-6eeaab17178c",
	"fullName": "user",
	"email": "user@mail.com",
	"telephone": "21999999999",
	"createdAt": "2023-03-31T18:51:47.475Z",
	"contacts": [
		{
			"id": "b45ca904-7381-4d5c-b187-71affeed502d",
			"fullName": "Arrascaeta",
			"email": "Arrascaeta@mail.com",
			"telephone": "21985214785",
			"createdAt": "2023-03-31T19:22:42.053Z"
		}
	]
}
```

# Possíveis erros

status - 403

```Json

{
    "message":"User does not have the necessary credentials. Login needed."
}
```

status - 404

```json
{
  "message": "User not found"
}
```

status - 401

```Json
{
 "message":[
    "Invalid token!",
    "You don't have authorization!"
 ]
}
```

## Atualizar Usuário

- ## PATCH /users/:id

```Json

{
  "fullName": "Zico",
  "email": "zico@mail.com",
  "password": "zicoénossodeus123@",
  "confirmPass": "zicoénossodeus123@",
  "telephone": "21999999981"
}
```

Retorno esperado - 200

```json
{
  "contacts": [
    {
      "createdAt": "Fri Mar 31 2023 16:22:42 GMT-0300 (Horário Padrão de Brasília)",
      "telephone": "21985214785",
      "email": "Arrascaeta@mail.com",
      "fullName": "Arrascaeta",
      "id": "b45ca904-7381-4d5c-b187-71affeed502d"
    }
  ],
  "createdAt": "Fri Mar 31 2023 15:51:47 GMT-0300 (Horário Padrão de Brasília)",
  "telephone": "21999999981",
  "email": "zico@mail.com",
  "fullName": "Zico",
  "id": "7ef1adab-edaa-4970-9a4e-6eeaab17178c"
}
```

# Possíveis erros

status - 403

```Json

{
    "message":"You don't have authorization to change this fields"
}
```

status - 404

```json
{
  "message": "User not found"
}
```

status - 401

```Json
{
 "message":[
    "Invalid token!",
    "You don't have authorization!"
 ]
}
```

## Deletar Usuario

- ## DELETE/users/:Id

```json
{}
```

Retorno esperado - 200

# Possíveis erros

status - 404

```json
{
  "message": "Client don't exists!"
}
```

status - 401

```Json
{
 "message":[
    "Invalid token!",
    "You don't have authorization!"
 ]
}
```

## Cadastro de contato

- ### POST /contacts

Body

```json
{
{
  "fullName": "Arrascaeta",
  "email": "Arrascaeta@mail.com",
  "telephone": "21985214785"
}
}
```

Retorno esperado - 201

```json
{
  "createdAt": "Fri Mar 31 2023 16:22:42 GMT-0300 (Horário Padrão de Brasília)",
  "telephone": "21985214785",
  "email": "Arrascaeta@mail.com",
  "fullName": "Arrascaeta",
  "id": "b45ca904-7381-4d5c-b187-71affeed502d"
}
```

# Possíveis erros

status - 404

```Json
{
    "message":"Client don't exists!"
}
```

status - 401

```Json

{
    "message":["You dont have authorization for this field","You don't have authorization!","Invalid token!"
    ]
}
```

## Atualizar Usuário

- ## PATCH /contacts/:id

```Json

{
  "fullName": "Gabigol",
  "email": "gabigol@mail.com",
  "telephone": "21985214719"
}
```

Retorno esperado - 200

```json
{
  "createdAt": "Fri Mar 31 2023 16:22:42 GMT-0300 (Horário Padrão de Brasília)",
  "telephone": "21985214719",
  "email": "gabigol@mail.com",
  "fullName": "Gabigol",
  "id": "b45ca904-7381-4d5c-b187-71affeed502d"
}
```

# Possíveis erros

status - 403

```Json

{
    "message":"You don't have authorization to change this fields"
}
```

status - 404

```json
{
  "message": ["Client not found", "Contact not found!"]
}
```

status - 401

```Json
{
 "message":[
    "Invalid token!",
    "You don't have authorization!"
 ]
}
```

## Deletar Usuario

- ## DELETE/users/:Id

```json
{}
```

Retorno esperado - 200

# Possíveis erros

status - 404

```json
{
  "message": ["Client not found", "Contact not found!"]
}
```

status - 401

```Json
{
 "message":[
    "Invalid token!",
 ]
}
```
