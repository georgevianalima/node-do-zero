# Node do Zero 🚀

Uma API REST de gerenciamento de vídeos construída com Node.js e Fastify.

## 📋 Descrição do Projeto

Este projeto é uma aplicação educacional que demonstra como construir uma API REST completa usando Node.js. A aplicação oferece um sistema de CRUD para gerenciar vídeos com suporte a busca e filtros.

## ✨ Características

- ✅ API REST completa (GET, POST, PUT, DELETE)
- ✅ Busca de vídeos por título
- ✅ Suporte a múltiplos bancos de dados (Memory e PostgreSQL)
- ✅ Framework Fastify de alta performance
- ✅ IDs únicos usando UUID
- ✅ Variáveis de ambiente com dotenv

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** - Banco de dados relacional
- **Neon** - PostgreSQL serverless
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📦 Instalação

1. Clone ou configure o projeto:
```bash
cd NODE-DO-ZERO
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env`:
```env
DATABASE_URL=sua_url_do_banco_de_dados
```

## 🚀 Como Executar

### Modo Desenvolvimento (com hot-reload)
```bash
npm run dev
```

### Modo Produção
```bash
npm start
```

O servidor iniciará na porta `3333`.

## 📡 Endpoints da API

### Criar Vídeo
```http
POST /videos
Content-Type: application/json

{
    "title": "Título do vídeo",
    "description": "Descrição do vídeo",
    "duration": 180
}
```
**Resposta:** `201 Created`

### Listar Vídeos
```http
GET /videos
```

### Buscar Vídeos por Título
```http
GET /videos?search=termo_de_busca
```

### Atualizar Vídeo
```http
PUT /videos/:id
Content-Type: application/json

{
    "title": "Novo título",
    "description": "Nova descrição",
    "duration": 200
}
```
**Resposta:** `204 No Content`

### Deletar Vídeo
```http
DELETE /videos/:id
```
**Resposta:** `204 No Content`

## 📁 Estrutura do Projeto

```
NODE-DO-ZERO/
├── server.js              # Configuração do servidor Fastify
├── db.js                  # Conexão com o banco de dados
├── database-postgres.js   # Implementação PostgreSQL
├── database-memory.js     # Implementação em memória
├── create-table.js        # Script para criar tabelas
├── routes.http            # Exemplos de requisições HTTP
├── package.json           # Dependências do projeto
└── README.md             # Este arquivo
```

## 🔄 Fluxo da Aplicação

1. **Servidor** - Fastify inicia na porta 3333
2. **Rotas** - Requisições são roteadas para handlers específicos
3. **Database** - Cada operação interage com a camada de banco de dados
4. **PostgreSQL** - Dados são persistidos no PostgreSQL via Neon

## 🧪 Testando a API

Use o arquivo `routes.http` com a extensão REST Client do VS Code ou qualquer ferramenta HTTP como Postman/Insomnia.

## 📝 Próximas Melhorias

- [ ] Implementar validação de dados com zod
- [ ] Adicionar autenticação
- [ ] Implementar testes unitários
- [ ] Adicionar tratamento de erros robusto
- [ ] Criar documentação Swagger/OpenAPI
- [ ] Implementar paginação
- [ ] Adicionar logging estruturado

## 📄 Licença

ISC

## 👨‍💻 Autor

Desenvolvido como parte do aprendizado de Node.js do zero.

---

**Dica:** Para aprender mais sobre Fastify, visite [fastify.dev](https://www.fastify.io/)
