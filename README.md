# 🎓 LMC+ PLUS

**Trabalho de Conclusão de Curso** — [RaphaelDiSanto]

![Next.js](https://nextjs.org/docs)
![TypeScript](https://www.typescriptlang.org/docs/)
![Tailwind CSS](https://www.typescriptlang.org/docs/)
![PostgreSQL](https://dev.mysql.com/doc/)
![PrismaORM](https://www.prisma.io/docs)
![BetterAuth](https://better-auth.com/docs/introduction)
![Docker](https://docs.docker.com)
![ExcelJS](https://github.com/exceljs/exceljs)
![ShadCN](https://ui.shadcn.com/docs/installation)

---

## 📋 Sumário

* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Arquitetura do Projeto](#-arquitetura-do-projeto)
* [Pré-requisitos](#️-pré-requisitos)
* [Como Rodar o Projeto](#-como-rodar-o-projeto)
* [Variáveis de Ambiente](#-variáveis-de-ambiente)
* [Estrutura de Pastas](#-estrutura-de-pastas)
* [Rotas da Aplicação](#-rotas-da-aplicação)
* [Banco de Dados](#-banco-de-dados)
* [Scripts Disponíveis](#-scripts-disponíveis)
* [Autor](#-autor)

---

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso e tem como objetivo **[descrever o objetivo principal da plataforma]**.

A proposta surgiu a partir da identificação do problema **[descrever o problema]**, que impacta **[público-alvo]**. Para solucionar essa questão, foi desenvolvida uma plataforma capaz de **[descrever a solução]**.

O sistema permite que os usuários possam **[descrever as funcionalidades principais]**, tornando o processo mais eficiente, acessível e seguro.

---

## ✅ Funcionalidades

* ✅ Autenticação de usuários (login e cadastro)
* ✅ Gerenciamento de dados da aplicação
* ✅ Painel administrativo
* ✅ Integração com banco de dados MySQL
* ✅ Banco modelado pelo Prisma ORM
* ✅ Banco de um container do Docker
* ✅ Responsividade para dispositivos móveis
* ✅ Interface moderna e intuitiva com Shadcn

> Atualize esta seção com as funcionalidades reais do sistema.

---

## 🛠 Tecnologias Utilizadas

| Categoria      | Tecnologia                    | Versão           |
| -------------- | ----------------------------- | ---------------- |
| Framework      | Next.js (App Router)          | 15.x             |
| Linguagem      | TypeScript                    | 5.x              |
| Estilização    | Tailwind CSS                  | 3.x ou 4.x       |
| Banco de Dados | MySQL                    | 16.x             |
| ORM            | Prisma ORM          | 5.x              |
| Autenticação   | Better Auth |  |
| Hospedagem     | Vercel, Render ou similar     | —                |

---

## 🏗 Arquitetura do Projeto

O projeto segue a arquitetura **App Router do Next.js**, promovendo separação clara entre interface, regras de negócio e persistência de dados.

### Camadas

* **Frontend:** Componentes React com SSR, CSR e Server Components.
* **Backend:** API Routes e Server Actions.
* **Banco de Dados:** PostgreSQL.
* **Autenticação:** JWT, Auth.js ou solução equivalente.

```text
Cliente (Browser)
      │
      ▼
 Next.js Application
 ├── App Router
 ├── API Routes
 ├── Server Actions
 └── Components
      │
      ▼
 PostgreSQL Database
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de possuir:

* Node.js >= 18
* npm >= 9, pnpm ou yarn
* PostgreSQL >= 14
* Git

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git

cd nome-do-repositorio
```

### 2. Instale as dependências

```bash
npm install

# ou

pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com os valores adequados.

### 4. Configure o banco de dados

```bash
npx prisma generate

npx prisma migrate dev --name init
```

Popular dados iniciais (opcional):

```bash
npx prisma db seed
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
# Banco de Dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

# Autenticação
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000"

# Variáveis adicionais
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> Nunca envie arquivos `.env` para o repositório.

---

## 📁 Estrutura de Pastas

```text
📦 nome-do-projeto
┣ 📂 app/
┃ ┣ 📂 (auth)/
┃ ┃ ┣ 📂 login/
┃ ┃ ┗ 📂 cadastro/
┃ ┣ 📂 (dashboard)/
┃ ┃ ┣ 📂 usuarios/
┃ ┃ ┗ 📂 configuracoes/
┃ ┣ 📂 api/
┃ ┃ ┣ 📂 auth/
┃ ┃ ┗ 📂 recursos/
┃ ┣ 📄 layout.tsx
┃ ┗ 📄 page.tsx
┣ 📂 components/
┃ ┣ 📂 ui/
┃ ┗ 📂 features/
┣ 📂 lib/
┃ ┣ 📄 db.ts
┃ ┗ 📄 auth.ts
┣ 📂 prisma/
┃ ┣ 📄 schema.prisma
┃ ┗ 📂 migrations/
┣ 📂 public/
┣ 📂 types/
┣ 📄 .env.example
┣ 📄 next.config.ts
┣ 📄 tsconfig.json
┣ 📄 package.json
┗ 📄 README.md
```

---

## 🗺 Rotas da Aplicação

| Rota                       | Descrição                 | Acesso      |
| -------------------------- | ------------------------- | ----------- |
| `/`                        | Página inicial            | Público     |
| `/login`                   | Autentação de usuários    | Público     |
| `/cadastro`                | Cadastro de usuários      | Público     |
| `/dashboard`               | Painel principal          | Autenticado |
| `/dashboard/usuarios`      | Gerenciamento de usuários | Autenticado |
| `/dashboard/configuracoes` | Configurações do sistema  | Autenticado |
| `/api/auth/*`              | Endpoints de autenticação | Interno     |
| `/api/*`                   | Endpoints da aplicação    | Interno     |

> Atualize conforme as rotas reais do projeto.

---

## 🗄 Banco de Dados

O sistema utiliza PostgreSQL para armazenamento dos dados.

### Modelo Conceitual Simplificado

```text
┌─────────────┐
│   Usuario   │
├─────────────┤
│ id          │
│ nome        │
│ email       │
│ senha_hash  │
│ criado_em   │
└─────────────┘
```

Caso o projeto possua múltiplas entidades, recomenda-se incluir:

* Diagrama ER
* Modelo lógico
* Modelo físico
* Imagem exportada do banco

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm run start

# Qualidade de código
npm run lint

# Prisma
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

---

## 👤 Autor

**[Seu Nome Completo]**

* 🎓 Curso: [Nome do Curso]
* 🏛️ Instituição: [Nome da Instituição]
* 📅 Ano: [Ano de Defesa]
* 🔗 LinkedIn: https://linkedin.com/in/seu-perfil
* 📧 E-mail: [seuemail@exemplo.com](mailto:seuemail@exemplo.com)

# Desenvolvido com 💙 como Trabalho de Conclusão de Curso