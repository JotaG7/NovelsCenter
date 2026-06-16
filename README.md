# NovelsCenter

A novel review system built to practice array manipulation, objects, and search algorithms.

## How to Run

1. Clone this repository: `git clone https://github.com/JotaG7/NovelsCenter.git`
2. Open the `index.html` file directly in your browser or use the **Live Server** extension in VS Code

## Features

Currently, the system includes:

1. **Fast Search**: Using a **Hash Table** to ensure **O(1) constant time** when finding novels by title.

2. **Smart Sorting**: Using `filter()`, `slice()`, and `sort()` methods to return the top 3 novels of a specific genre based on the highest ratings.

3. **Data Normalization**: Using `.toLocaleLowerCase()`, `.trim()`, and the combination of `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, the system standardizes input strings. Whether the user types with extra spaces, case variations, or accents, the system ensures search precision across all typing variations.

4. **Dynamic Filter**: Using the `filter()` method to allow dynamic filtering of novels by their reading status.

5. **Breadth-First Search (BFS) Recommendation**: Implemented a BFS algorithm over a bidirectional graph to suggest relevant novels dynamically based on the user's current selection.

6. **Details Page & Recursive Comments**: A dynamic details page that loads specific novel data via URL parameters, featuring a comment system complete data persistence.

7. **Interface Themes**: LocalStorage-driven light/dark mode persistence that respects user preferences across reloads.

## Technologies

- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Git/GitHub**
- **HTML5**
- **CSS3**

## Lessons Learned

1. I preserved **Data Immutability** using the **Spread Operator**. This creates a "copy" of the original array to perform operations, returning a new set of ordered data while the original array remains unchanged.

2. I used the **reduce()** method to create a **Hash Table**, optimizing title-based searches.

3. **DOM Performance Optimization**: I replaced direct `+=` concatenation inside `innerHTML` loops with the combined use of `.map()` and `.join("")`. This prevents unnecessary layout recalculations (_reflow_), allowing the browser to process the generated string and update the visual interface in a single operation.

4. **Bidirectional Graph Construction**: To implement the `Breadth-First Search (BFS)`, I created a bidirectional graph. By using the `.forEach()` method to iterate through the "database" combined with `.split()` and `.map()`, I transformed and normalized the genre strings. The algorithm takes the initial vertex (the clicked novel) and points to all its genres; these, in turn, point back to the respective novels that share them. Consequently, novels that share more genres with the clicked novel will be prioritized in the recommendations.

5. **Data Persistence & Execution Order**: I learned how to manage data synchronization using **LocalStorage**, resolving edge cases related to asynchronous initialization and object references in JavaScript.

## Future improvements/Roadmap

1. Migrate the local mock data to a real REST API or backend service.
2. Implement user authentication for individualized comment profiles.

**Created by João Paulo Almeida Aureliano**

---

### Versão em Português (PT-BR)

## NovelsCenter

Um sistema de resenhas sobre novels para praticar manipulação de arrays, objetos e algoritmos de busca.

## Como Executar

1. Clone este repositório: `git clone https://github.com/JotaG7/NovelsCenter.git`
2. Abra o arquivo `index.html` diretamente em seu navegador ou use a extensão **Live Server** no VS Code

## O que o sistema faz?

Atualmente as funcionalidades são:

1. **Busca Rápida**: Utilizando **Tabela Hash**, garanto **tempo constante O(1)** para encontrar novels pelo título.

2. **Ordenação Inteligente**: Utilizando os métodos `filter()`, `slice()` e `sort()`, o sistema retorna as top 3 novels de um gênero específico com as maiores notas.

3. **Normalização de Dados**: Com o `.toLocaleLowerCase()`, `.trim()` e com a combinação de `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, o sistema unifica as strings fazendo com que o modo como o usuário digita seja convertido em strings "padrões". Se for com espaçamentos extras, letras maiúsculas/minúsculas e com acentos, o sistema garante precisão nas buscas mesmo com as variações na digitação.

4. **Filtro Dinâmico**: Utilizando os método `filter()`, é possível realizar uma filtragem dinâmica das novels por status de leitura.

5. **Implementação do Algoritmo em Largura - BFS**: Após a construção do grafo bidirecional, implementei o BFS para recomendar novels correlacionadas de acordo com a novel selecionada pelo usuário.

6. **Página de Detalhes e Comentários Recursivos**: Criação de uma página interna dinâmica mapeada via parâmetros de URL (`URLSearchParams`), com sistema de injeção de novos comentários.

7. **Persistência de Preferências**: Armazenamento do estado do tema (Claro/Escuro) e cache de dados de comentários diretamente no navegador via **LocalStorage**.

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Git/GitHub**
- **HTML5**
- **CSS3**

## Lições Aprendidas

1. Preservei a **Imutabilidade** dos dados utilizando o **Spread Operator**, que basicamente cria uma "cópia" do array original e com essa cópia ele executa a função que lhe é feita, ou seja, a "cópia" do array foi criada e modificada e retorna um novo conjunto de dados ordenados, enquanto o array original permanece imutável.

2. Utilizei o método **reduce()** para criar uma **Tabela Hash** e assim otimizar as buscas através do título.

3. **Otimização da performance DOM**: Substituí o uso da concatenação direta "+=" no `innerHTML` dentro do laço pelo uso combinado de `.map()` e `.join("")`, onde serão evitadas renderizações repetidas desnecessárias (_reflow_), fazendo com que o navegador processe a string gerada e atualize a interface visual em uma única operação.

4. **Construção de grafo bidirecional**: Para utilizar da `Pesquisa em Largura (BFS)`, criei um grafo bidirecional. Com `.forEach()` fiz um loop no meu "banco de dados" e utilizando dos métodos `.split()` e `.map()`, transformei e normalizei a string de gêneros. O algoritmo pega o vértice inicial (a novel clicada) e aponta para todos os seus gêneros; estes, por sua vez, apontam para as respectivas novels que os possuem. Dessa forma, as novels que compartilharem mais gêneros com a novel clicada serão priorizadas nas recomendações.

5. **Gerenciamento de Estado e Sincronização**: Aprendi a lidar com referências de memória no JavaScript e a importância da ordem de execução de scripts ao carregar e atualizar o estado global da aplicação a partir do cache local.

## Futuras Melhorias/Roadmap

1. Migrar a base de dados local para consumo de uma API REST real.
2. Adicionar autenticação de usuários para controle individualizado de perfis nos comentários.

**Criado por João Paulo Almeida Aureliano**
