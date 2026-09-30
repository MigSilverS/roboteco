# ROBOTECO 🤖

Plataforma educacional voltada ao ensino de robótica, programação e eletrônica, conectando aprendizado online a atividades presenciais em escolas públicas.

> 🚧 Projeto em desenvolvimento.

## Descrição

O ROBOTECO é um projeto interdisciplinar e de extensão desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas da Fatec Guaratinguetá.  
Este repositório contém o frontend em **Next.js (App Router)**, com páginas públicas, páginas de acesso do aluno e telas institucionais.

## Objetivo

Ampliar o acesso à educação tecnológica por meio de conteúdos educativos e atividades práticas, incentivando raciocínio lógico, criatividade e resolução de problemas.

Também busca facilitar o contato entre escolas e a equipe responsável pelas aulas presenciais.

## Funcionalidades confirmadas no código

As funcionalidades abaixo são as que já existem no estado atual do repositório (principalmente como interface):

- Página inicial com apresentação do projeto e CTA para aulas experimentais (`/`).
- Navegação pública com páginas:
  - `/pages/escola/para-escolas`
  - `/pages/sobre-nos`
  - `/pages/suporte`
  - `/pages/conteudos`
  - `/pages/login`
  - `/pages/cadastro`
- Página “Para Escolas” com formulário de solicitação de aula experimental (sem integração de backend neste repositório).
- Página de conteúdos com:
  - barra de pesquisa visual,
  - botões de filtro por tema,
  - cards de conteúdo demonstrativos.
- Página “Painel do Aluno” com indicadores visuais de progresso/gamificação (`/pages/aluno/painel-do-aluno`).
- Página “Sobre nós” com pilares do projeto, equipe e parceiro técnico.
- Uso de componentes reutilizáveis (botão, título, texto, cards, navbar, footer etc.).

## Stack e tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **JavaScript (JSX)**
- **Bootstrap 5**
- **Reactstrap**
- **React Icons**
- **CSS Modules** + `globals.css`

## Pré-requisitos

- **Node.js** (recomendado versão LTS)
- **npm**

## Instalação

```bash
npm install
```

## Configuração

Não há arquivo `.env` versionado nem variáveis obrigatórias documentadas no código atual.

Configurações existentes:

- `next.config.mjs` com `reactCompiler: true`
- `jsconfig.json` com alias `@/* -> ./src/*`

## Execução e uso

### Desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador o endereço exibido no terminal (normalmente `http://localhost:3000`).

### Build de produção

```bash
npm run build
```

### Iniciar em modo produção

```bash
npm run start
```

## Estrutura de diretórios (resumo)

```text
.
├── README.md
├── package.json
├── next.config.mjs
├── jsconfig.json
└── src/
    └── app/
        ├── components/         # componentes reutilizáveis de UI
        ├── pages/              # páginas/rotas da aplicação
        ├── images/             # imagens estáticas
        ├── globals.css
        ├── layout.js
        └── page.jsx            # rota "/"
```

## Exemplos rápidos

- Abrir a página de conteúdos: `http://localhost:3000/pages/conteudos`
- Abrir a página de solicitação para escolas: `http://localhost:3000/pages/escola/para-escolas`
- Abrir o painel do aluno (interface): `http://localhost:3000/pages/aluno/painel-do-aluno`

## Testes

No estado atual do repositório, **não há suíte de testes automatizados configurada** (não existem scripts de teste no `package.json`).

## Deploy

Não há pipeline/guia de deploy definido neste repositório.  
Como é um projeto Next.js, o deploy pode ser feito em provedores compatíveis (ex.: Vercel), mas isso não está configurado aqui.

## Contribuições

Contribuições são bem-vindas via pull request, priorizando:

- mudanças pequenas e focadas;
- consistência com componentes e estilos existentes;
- documentação atualizada quando necessário.

## Equipe

- Anna Laura Modesto Silva
- Danilo das Neves Alegre
- Diego Nogueira de Souza
- Livia de Toledo Bennaton
- Miguel Prata Silva
- Thainá de Faria Gonçalves

**Orientador:** Bruno Donizete da Silva.  
**Parceiro técnico:** Wolf Army Robotics.

## Licença

Este repositório não possui arquivo de licença (`LICENSE`) identificado até o momento.
