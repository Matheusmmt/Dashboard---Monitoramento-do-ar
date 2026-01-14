# 🌍 Dashboard de Monitoramento da Qualidade do Ar

> Um dashboard interativo e responsivo para visualização e monitoramento em tempo real da qualidade do ar utilizando dispositivos IoT.

## 📋 Visão Geral

Este projeto é uma aplicação web moderna desenvolvida como interface para um sistema de monitoramento do ar baseado em um artigo para a disciplina de Tecnlogias Web. O dashboard fornece visualizações intuitivas e atualizadas de dados de qualidade do ar coletados por diversos sensores IoT distribuídos geograficamente. No momento atual do projeto estão sendo utilizados dados ficticios.

## Link do Artigo: https://sol.sbc.org.br/index.php/wcama/article/view/29429

### Equipe de desenvolvimento do dashboard
  MATHEUS MELO TEIXEIRA
  RAFAEL DE SOUSA FIDELES
  BRENO WESLEY TEIXEIRA MARQUES
  GILLIARD RIPARDO FURTADO

### 🎯 Objetivos do Projeto

- Criar uma interface amigável para visualização de dados de qualidade do ar em tempo real
- Disponibilizar ferramentas de análise e comparação de dados entre diferentes localidades
- Facilitar a tomada de decisão através de indicadores visuais claros e informativos
- Fornecer histórico e tendências de qualidade do ar

---

## 🚀 Tecnologias Utilizadas

### Frontend & Build
- **React 19.2** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript 5.9** - Linguagem tipada que compila para JavaScript
- **Vite 7.2** - Ferramenta de build rápida e moderna com HMR (Hot Module Replacement)
- **Node.js** - Runtime JavaScript para desenvolvimento

### UI & Styling
- **Tailwind CSS 3.4** - Framework CSS utilitário para estilização
- **PostCSS 8.5** - Ferramenta para transformação de CSS
- **Radix UI** - Biblioteca de componentes não estilizados e acessíveis
  - `@radix-ui/react-avatar` - Componentes de avatar
  - `@radix-ui/react-dialog` - Diálogos modais acessíveis
  - `@radix-ui/react-dropdown-menu` - Menus dropdown
  - `@radix-ui/react-select` - Componentes de seleção
  - `@radix-ui/react-separator` - Separadores
  - `@radix-ui/react-tabs` - Abas para navegação
- **Lucide React 0.562** - Ícones SVG personalizáveis
- **Class Variance Authority** - Utilitário para gerenciamento de variações de componentes
- **Tailwind Merge & Animate** - Utilitários adicionais do Tailwind

### Visualização de Dados
- **Recharts 3.6** - Biblioteca React para gráficos e visualizações interativas

### Qualidade de Código
- **ESLint 9.39** - Linter para JavaScript/TypeScript
- **TypeScript ESLint** - Suporte a ESLint para TypeScript
- **ESLint React Hooks** - Plugin para verificação de React Hooks

### Gerenciamento de Dependências
- **npm** - Gerenciador de pacotes Node.js

---

## 📁 Estrutura do Projeto

```
Dashboard---Monitoramento-do-ar/
├── public/                           # Arquivos estáticos
├── src/
│   ├── assets/                       # Imagens, fontes e outros assets
│   ├── components/
│   │   └── ui/                       # Componentes UI reutilizáveis
│   │       ├── avatar.tsx            # Componente de avatar
│   │       ├── badge.tsx             # Componente de badge
│   │       ├── button.tsx            # Componente de botão
│   │       ├── card.tsx              # Componente de card/painel
│   │       ├── dropdown-menu.tsx     # Componente de menu dropdown
│   │       ├── input.tsx             # Componente de input
│   │       ├── select.tsx            # Componente de seleção
│   │       ├── separator.tsx         # Componente de separador
│   │       ├── sheet.tsx             # Componente de sheet (drawer)
│   │       ├── table.tsx             # Componente de tabela
│   │       └── tabs.tsx              # Componente de abas
│   ├── contexts/
│   │   └── AuthContext.tsx           # Contexto de autenticação
│   ├── lib/
│   │   ├── data.ts                   # Funções e dados utilitários
│   │   └── utils.ts                  # Funções auxiliares gerais
│   ├── pages/
│   │   ├── Dashboard.tsx             # Página principal do dashboard
│   │   └── LoginPage.tsx             # Página de login
│   ├── App.css                       # Estilos globais da aplicação
│   ├── App.tsx                       # Componente raiz da aplicação
│   ├── index.css                     # Estilos base
│   └── main.tsx                      # Ponto de entrada da aplicação
├── components.json                   # Configuração de componentes
├── eslint.config.js                  # Configuração do ESLint
├── index.html                        # Arquivo HTML principal
├── package.json                      # Dependências e scripts do projeto
├── postcss.config.js                 # Configuração do PostCSS
├── tailwind.config.js                # Configuração do Tailwind CSS
├── tsconfig.json                     # Configuração base do TypeScript
├── tsconfig.app.json                 # Configuração do TypeScript para aplicação
├── tsconfig.node.json                # Configuração do TypeScript para build
├── vite.config.ts                    # Configuração do Vite
└── README.md                         # Este arquivo
```

### Descrição dos Diretórios Principais

**`src/components/ui/`** - Biblioteca de componentes reutilizáveis baseada em Radix UI com estilização Tailwind. Inclui componentes atômicos como botões, cards, inputs, tabelas, etc.

**`src/pages/`** - Páginas principais da aplicação com lógica específica de cada seção. Contém a página de login e o dashboard principal.

**`src/contexts/`** - React Contexts para gerenciamento de estado global. Utilizado para autenticação e controle de acesso.

**`src/lib/`** - Funções utilitárias, transformações de dados, helpers e constantes compartilhadas em toda a aplicação.

---

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn como gerenciador de pacotes

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/Dashboard---Monitoramento-do-ar.git
cd Dashboard---Monitoramento-do-ar
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
Abra seu navegador e acesse `http://localhost:5173`

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement) |
| `npm run build` | Compila TypeScript e cria build otimizado para produção |
| `npm run lint` | Executa análise estática de código com ESLint |
| `npm run preview` | Visualiza a build de produção localmente |

---

## 🎨 Funcionalidades

### Dashboard Principal
- ✅ Visualização em tempo real de dados de qualidade do ar
- ✅ Gráficos interativos de tendências históricas
- ✅ Filtros por período e localidade
- ✅ Indicadores de qualidade do ar com código de cores
- ✅ Comparação entre diferentes estações de monitoramento

### Sistema de Autenticação
- ✅ Login seguro de usuários
- ✅ Gerenciamento de sessão via React Context
- ✅ Controle de acesso a funcionalidades
- ✅ Logout e expiração de sessão

### Interface Responsiva
- ✅ Design adaptável para desktop, tablet e dispositivos móveis
- ✅ Navegação intuitiva com componentes Radix UI
- ✅ Tema consistente com Tailwind CSS
- ✅ Modo escuro (implementável facilmente com Tailwind)
- ✅ Componentes acessíveis (a11y)

---

## 🔌 Integração IoT

Este dashboard foi desenvolvido para integrar-se com sistemas de sensores IoT que coletam dados de:

| Poluente | Descrição |
|----------|-----------|
| **PM2.5** | Material particulado fino (até 2,5 micrômetros) |
| **PM10** | Material particulado grosso (até 10 micrômetros) |
| **NO₂** | Dióxido de Nitrogênio |
| **O₃** | Ozônio |
| **SO₂** | Dióxido de Sulfúrbio |
| **CO** | Monóxido de Carbono |

Os dados são processados e apresentados através de visualizações que permitem acompanhar a qualidade do ar em tempo real, facilitando a identificação de padrões, picos de poluição e tendências.

---

## 🔧 Configuração do Projeto

### Tailwind CSS
O projeto utiliza Tailwind CSS para estilização. A configuração está em `tailwind.config.js`, permitindo customização de cores, fontes e temas.

### TypeScript
Configuração rigorosa de TypeScript garante segurança de tipo em toda a aplicação:
- `tsconfig.json` - Configuração base
- `tsconfig.app.json` - Configuração específica para aplicação
- `tsconfig.node.json` - Configuração para ferramentas de build

### ESLint
Análise estática de código configurada em `eslint.config.js` para manter a qualidade e consistência do código.

---

## 📚 Documentação e Referências

Este projeto foi desenvolvido baseado em pesquisas e artigos científicos sobre monitoramento ambiental e qualidade do ar. A arquitetura e funcionalidades foram planejadas para fornecer uma interface robusta e intuitiva para dados de sensores distribuídos.

### Padrões de Qualidade do Ar
- **Índice de Qualidade do Ar (AQI)** - Escala padrão para comunicar a qualidade do ar
- **Poluentes Critério** - Poluentes com padrões de qualidade ambiental estabelecidos
- **Monitoramento em Tempo Real** - Atualização contínua de dados dos sensores

---

## 👨‍💻 Desenvolvimento

### Estrutura de Componentes
Os componentes são organizados seguindo os princípios:

1. **Componentes de UI** - Componentes base reutilizáveis sem lógica de negócio
   - Localizados em `src/components/ui/`
   - Baseados em Radix UI para acessibilidade
   - Estilizados com Tailwind CSS

2. **Páginas** - Componentes de nível superior que gerenciam estado e lógica
   - Localizados em `src/pages/`
   - Contêm lógica de negócio específica
   - Utilizam hooks do React

3. **Contexts** - Gerenciamento de estado global
   - Localizados em `src/contexts/`
   - Utilizados para autenticação e dados compartilhados

### Estilo de Código
- ✅ TypeScript para type safety
- ✅ ESLint para manter qualidade do código
- ✅ Tailwind CSS para estilização consistente
- ✅ React Hooks para gerenciamento de estado
- ✅ Componentes funcionais (Function Components)

### Boas Práticas
- Componentes pequenos e reutilizáveis
- Props bem tipadas com TypeScript
- Nomes descritivos para variáveis e funções
- Comentários em trechos complexos
- Separação de responsabilidades


*Última atualização: Janeiro de 2026*
