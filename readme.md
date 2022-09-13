# **DrivenPass 🔒**

### <p>DrivenPass é uma API de gerenciamento de senhas. A API será responsável pelo registro de senhas de credenciais, notas seguras, cartões e wi-fis.</p>

# Rotas de autenticação:

## Rota <span style="color:green"> **POST** </span>/sign-up

<p>Essa é uma rota não autenticada. Sua função tem como objetivo cadastrar novos usuários.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "email": "email_do_usuário", //string
  "password": "senha_do_usuário" //string
}
```

## Rota <span style="color:green"> **POST** </span>/sign-in

<p>Essa é uma rota não autenticada. Sua função tem como objetivo fazer o login dos usuários.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "email": "email_do_usuário", //string
  "password": "senha_do_usuário" //string
}
```

<p>Essa rota retornará um token que será utilizado na verificação das outras rotas</p>

# Rotas de credenciais:

## Rota <span style="color:green"> **POST** </span>/credentials/create

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo criar novas credenciais.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "title": "título_da_credencial", //string
  "url": "url_da_credencial", //string
  "userName": "usuário_da_credencial", //string
  "password": "senha_da_credencial" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/credentials/search

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar todas as credenciais do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
[
  {
    "id": "id_da_credencial", //number
    "title": "título_da_credencial", //string
    "url": "url_da_credencial", //string
    "userName": "usuário_da_credencial", //string
    "password": "senha_da_credencial", //string
    "userId": "id_do_usuário" //number
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/credentials/search/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar uma credencial específica do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
{
  "id": "id_da_credencial" //number
  "title": "título_da_credencial", //string
  "url": "url_da_credencial", //string
  "userName": "usuário_da_credencial", //string
  "password": "senha_da_credencial", //string
  "userId": "id_do_usuário" //number
}
```

## Rota <span style="color:red"> **DELETE** </span>/credentials/delete/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo deletar uma credencial específica do usuário.</p>

# Rotas de notas seguras:

## Rota <span style="color:green"> **POST** </span>/safe-notes/create

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo criar novas notas seguras.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "title": "título_da_nota_segura", //string
  "note": "nota_da_nota segura" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/safe-notes/search

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar todas as notas seguras do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
[
  {
    "id": "id_da_nota_segura", //number
    "title": "título_da_nota_segura", //string
    "note": "anotação_da_nota_segura", //string
    "userId": "id_do_usuário" //number
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/safe-notes/search/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar uma nota segura específica do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
{
  "id": "id_da_nota_segura", //number
  "title": "título_da_nota_segura", //string
  "note": "anotação_da_nota_segura", //string
  "userId": "id_do_usuário" //number
}
```

## Rota <span style="color:red"> **DELETE** </span>/safe-notes/delete/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo deletar uma nota segura específica do usuário.</p>

# Rotas de cartões:

## Rota <span style="color:green"> **POST** </span>/cards/create

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo criar novos cartões.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "title": "título_do_cartão", //string
  "cardNumber": "número_do_cartão", //string
  "printedName": "nome_do_usuário_do_cartão", //string
  "securityCode": "", //string
  "expirationDate": "data_de_expiração_do_cartão", //string
  "password": "senha_do_cartão", //string
  "isVirtual": "", //boolean
  "type": "tipos_do_cartão" //string que aceita "crédito", "débito" ou "ambos"
}
```

## Rota <span style="color:yellow"> **GET** </span>/cards/search

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar todas os cartões do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
[
  {
    "id": "id_do_cartão", //number
    "title": "título_do_cartão", //string
    "cardNumber": "número_do_cartão", //string
    "printedName": "nome_do_usuário_do_cartão", //string
    "securityCode": "", //string
    "expirationDate": "data_de_expiração_do_cartão", //string
    "password": "senha_do_cartão", //string
    "isVirtual": "", //boolean
    "type": "tipos_do_cartão", //string que aceita "crédito", "débito" ou "ambos"
    "userId": "id_do_usuário" //number
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/cards/search/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar um cartão específico do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
{
  "id": "id_do_cartão", //number
  "title": "título_do_cartão", //string
  "cardNumber": "número_do_cartão", //string
  "printedName": "nome_do_usuário_do_cartão", //string
  "securityCode": "", //string
  "expirationDate": "data_de_expiração_do_cartão", //string
  "password": "senha_do_cartão", //string
  "isVirtual": "", //boolean
  "type": "tipos_do_cartão", //string que aceita "crédito", "débito" ou "ambos"
  "userId": "id_do_usuário" //number
}
```

## Rota <span style="color:red"> **DELETE** </span>/cards/delete/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo deletar um cartão específico do usuário.</p>

# Rotas de wi-fi:

## Rota <span style="color:green"> **POST** </span>/wifis/create

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo criar novas rotas de wi-fi.</p>
<p>O Body da requisição deve ser feito no seguinte formato:</p>

```json
{
  "title": "título_do_wi-fi", //string
  "netName": "nome_da_rede_de_wi-fi", //string
  "password": "senha_do_wi-fi" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/cards/search

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar todas as redes de wi-fi do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
[
  {
    "id": "id_do_wi-fi", //number
    "title": "título_do_wi-fi", //string
    "netName": "nome_da_rede_de_wi-fi", //string
    "password": "senha_do_wi-fi", //string
    "userId": "id_do_usuário" // number
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/wifis/search/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo buscar uma rede de wi-fi específica do usuário.</p>
<p>A resposta da requisição virá da seguinte forma:</p>

```json
{
  "id": "id_do_wi-fi", //number
  "title": "título_do_wi-fi", //string
  "netName": "nome_da_rede_de_wi-fi", //string
  "password": "senha_do_wi-fi", //string
  "userId": "id_do_usuário" // number
}
```

## Rota <span style="color:red"> **DELETE** </span>/wifis/delete/:id

<p>Essa é uma rota autenticada com um header do tipo "Authorization". Sua função tem como objetivo deletar uma rota de wi-fi específica do usuário.</p>
