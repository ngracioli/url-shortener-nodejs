# URL Shortener Node.js

Um projeto simples de encurtador de URLs usando Node.js, Express e MongoDB com Mongoose.

## Funcionalidades

-   Encurtar URLs longas para códigos curtos
-   Redirecionamento automático ao acessar o código curto
-   Listar todas as URLs encurtadas
-   Deletar URLs individualmente ou todas de uma vez

## Tecnologias

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   nanoid

## Rotas

-   `POST /shorten` — Cria uma URL encurtada
    **Body:** `{ "originalUrl": "https://exemplo.com" }`
-   `GET /urls` — Lista todas as URLs encurtadas
-   `DELETE /urls/delete/:id` — Remove uma URL pelo ID
-   `DELETE /urls/deleteall` — Remove todas as URLs
-   `GET /:shortCode` — Redireciona para a URL original

## Como rodar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/url-shortener-nodejs.git
    cd url-shortener-nodejs/backend
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Configure o arquivo `.env`:**

    ```
    MONGO_URI=coloque_sua_string_de_conexao_aqui
    PORT=3000
    ```

4. **Inicie o servidor:**
    ```bash
    npm run dev
    ```
    Ou:
    ```bash
    node index.js
    ```

## Licença

MIT
