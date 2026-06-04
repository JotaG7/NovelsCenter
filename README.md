# NovelsCenter

A novel review system built to practice array manipulation, objects, and search algorithms.

## How to Run

1. Clone this repository: `git clone <https://github.com/JotaG7/NovelsCenter.git>`
2. Open the `index.html` file directly in your browser or use the **Live Server** extension in VS code

## Features

Currently, the system includes:

1. **Fast Search**: Using a **Hash Table** to ensure **O(1) constant time** when finding novels by title.

2. **Smart Sorting**: Using `filter()`, `slice()`, and `sort()` methods to return the top 3 novels of a specific genre based on the highest ratings.

3. **Data Normalization**: Using `.toLocaleLowerCase()`, `.trim()`, and the combination of `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, the system standardizes input strings. Whether the user types with extra spaces, case variations, or accents, the system ensures search precision across all typing variations.

4. **Dynamic Filter**: Using the `filter()` method to allow dynamic filtering of novels by their reading status.

5. **Breadth-First Search (BFS) Recommendation**: Implemented a BFS algorithm over a bidirectional graph to suggest relevant novels dynamically based on the user's current selection.

## Technologies

- **JavaScript (ES6+)**
- **Git/GitHub**
- **HTML5**

## Lessons Learned

1. I preserved **Data Immutability** using the **Spread Operator**. This creates a "copy" of the original array to perform operations, returning a new set of ordered data while the original array remains unchanged.

2. I used the **reduce()** method to create a **Hash Table**, optimizing title-based searches.

3. **DOM Performance Optimization**: I replaced direct `+=` concatenation inside `innerHTML` loops with the combined use of `.map()` and `.join("")`. This prevents unnecessary layout recalculations (_reflow_), allowing the browser to process the generated string and update the visual interface in a single operation.

4. **Bidirectional Graph Construction**: To implement the `Breadth-First Search (BFS)`, I created a bidirectional graph. By using the `.forEach()` method to iterate through the "database" combined with `.split()` and `.map()`, I transformed and normalized the genre strings. The algorithm takes the initial vertex (the clicked novel) and points to all its genres; these, in turn, point back to the respective novels that share them. Consequently, novels that share more genres with the clicked novel will be prioritized in the recommendations.

## Future improvements/Roadmap

1. Create a detailed page to include the information about the clicked novel and all its features.

**Created by João Paulo Almeida Aureliano**

---

### Versão em Português (PT-BR)

## NovelsCenter

Um sistema de resenhas sobre novels para praticar manipulação de arrays, objetos e algoritmos de busca.

1. Clone este repositório: `git clone <https://github.com/JotaG7/NovelsCenter.git>`
2. Abra o arquivo `index.html` diretamente em seu navegador ou use a extensão **Live Server** no código VS

## O que o sistema faz?

Atualmente as funcionalidades são:

1. **Busca Rápida**: Utilizando **Tabela Hash**, garanto **tempo constante O(1)** para encontrar novels pelo título.

2. **Ordenação Inteligente**: Utilizando os métodos `filter()`, `slice()` e `sort()`, o sistema retorna as top 3 novels de um gênero específico com as maiores notas.

3. **Normalização de Dados**: Com o `.toLocaleLowerCase()`, `.trim()` e com a combinação de `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, o sistema unifica as strings fazendo com que o modo como o usuário digita seja convertido em strings "padrões". Se for com espaçamentos extras, letras maiúsculas/minúsculas e com acentos, o sistema garante precisão nas buscas mesmo com as variações na digitação.

4. **Filtro Dinâmico**: Utilizando o método `filter()`, é possível realizar uma filtragem dinâmica das novels por status de leitura.

5. **Implementação do Algoritmo em Largura - BFS**: após a construção do grafo bidirecional implementei ele para recomendar novels de acordo com a novel clicada do usuario.

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Git/GitHub**
- **HTML5**

## Lições Aprendidas

1. Preservei a **Imutabilidade** dos dados utilizando o **Spread Operator**, que basicamente cria uma "cópia" do array original e com essa cópia ele executa a função que lhe é feita, ou seja, a "cópia" do array foi criada e modificada e retorna um novo conjunto de dados ordenados, enquanto o array original permanece imutável.

2. Utilizei o método **reduce()** para criar uma **Tabela Hash** e assim otimizar as buscas através do título.

3. **Otimização da performance DOM**: Substituí o uso da concatenação direta "+=" no `innerHTML` dentro do laço pelo uso combinado de `.map()` e `.join("")`, onde serão evitadas renderizações repetidas desnecessárias (_reflow_), fazendo com que o navegador processe a string gerada e atualize a interface visual em uma única operação.

4. **Construção de grafo bidirecional**: Para utilizar da `Pesquisa em Largura (BFS)`, criei um grafo bidirecional, com `.forEach()` fiz um loop no meu "banco de dados" e utilizando dos metodos `.split()` e `.map()`, transformo e normalizei a string de generos. O algoritmo pega o vertice inicial(a novel clicacada) e aponta para todos os seus generos, estes, por sua vez, apontam para as respectivas novels que os possuem. Dessa forma, as novels que compartilharem mais gêneros com a novel clicada serão priorizadas nas recomendações.

## Futuras Melhorias/Roadmap

1. Criar uma pagina detalhada para colocar as infos da novel clicada e todas as suas funcionalidades.

**Criado por João Paulo Almeida Aureliano**
