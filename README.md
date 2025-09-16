# 💸 Calculadora de Orçamento Pessoal


<p align="left">
  <a href="https://imgur.com/a/es0">
    <img src="https://imgur.com/a/es0CutP" />
  </a>
</p>

## 🎯 Visão Geral do Projeto

Este é o meu primeiro projeto desenvolvido com **React**, focado em aplicar e solidificar conceitos fundamentais do desenvolvimento front-end moderno. A aplicação web permite que o usuário registre suas despesas diárias, adicione uma descrição e visualize um resumo simples do total gasto, ajudando a criar uma base para um controle financeiro pessoal.

O principal objetivo foi construir uma interface reativa e componentizada, colocando em prática o ecossistema do React de forma estruturada.

---

## ✨ Funcionalidades

-   **Adicionar Despesas:** Formulário para inserir o nome e o valor de uma nova despesa.
-   **Listagem Dinâmica:** As despesas são exibidas em uma lista que é atualizada em tempo real.
-   **Resumo de Gastos:** Um card exibe o valor total das despesas registradas.
-   **Interface Limpa:** Layout simples e intuitivo para facilitar a experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,html,css,git" />
  </a>
</p>

-   **React:** Biblioteca principal para a construção da interface de usuário.
-   **JavaScript (ES6+):** Linguagem base para toda a lógica da aplicação.
-   **HTML5:** Estrutura semântica do projeto.
-   **CSS3:** Estilização dos componentes para uma aparência agradável.

---

## 📖 O que eu aprendi

Este projeto foi fundamental para minha jornada de aprendizado em React. Os principais conceitos que pude aplicar e aprofundar foram:

#### ⚛️ Gerenciamento de Estado
-   Utilizei o hook `useState` extensivamente para gerenciar os dados da aplicação, como a lista de despesas e os valores dos inputs do formulário. Aprendi na prática como o estado controla o ciclo de vida dos componentes e como sua atualização causa uma nova renderização da UI de forma automática e eficiente.

#### 🧩 Componentização
-   Estruturei a aplicação em múltiplos componentes reutilizáveis, como `FormularioDeDespesa`, `ListaDeDespesas`, `ItemDeDespesa` e `Resumo`. Essa abordagem tornou o código mais limpo, organizado e fácil de manter, reforçando a principal filosofia do React.

#### Props (Propriedades)
-   Pratiquei a comunicação entre componentes através de `props`. Consegui passar dados (como as informações de uma despesa) de um componente "pai" (`App.js`) para um componente "filho" (`ListaDeDespesas`), além de passar funções como `props` para permitir que o componente filho pudesse alterar o estado do componente pai (ex: adicionando uma nova despesa).

#### 👁️ Renderização Condicional
-   Implementei lógicas para exibir elementos da UI com base em certas condições. Por exemplo, uma mensagem como "Nenhuma despesa registrada" era exibida quando a lista de despesas estava vazia, desaparecendo assim que o primeiro item era adicionado.

---

## 🏃 Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/Mellosre/orcamento-pessoal.git

# 2. Navegue até o diretório do projeto
cd orcamento-pessoal

# 3. Instale as dependências necessárias
npm install

# 4. Inicie a aplicação
npm start
```

Após executar o último comando, o projeto abrirá automaticamente no seu navegador padrão no endereço `http://localhost:3000`.

---
