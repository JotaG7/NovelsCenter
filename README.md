# NovelsCenter

A novel review system built to practice array manipulation, objects, and search algorithms.

## Features

Currently, the system includes:

1. **Fast Search**: Using a **Hash Table** to ensure **O(1) constant time** when finding novels by title.

2. **Smart Sorting**: Using `filter()`, `slice()`, and `sort()` methods to return the top 3 novels of a specific genre based on the highest ratings.

3. **Data Normalization**: Using `.toLocaleLowerCase()`, `.trim()`, and the combination of `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, the system standardizes input strings. Whether the user types with extra spaces, case variations, or accents, the system ensures search precision across all typing variations.

4. **Dynamic Filter**: Using the `filter()` method to allow dynamic filtering of novels by their reading status.

## Technologies

- **JavaScript (ES6+)**
- **Git/GitHub**
- **HTML5**

## Lessons Learned

1. I preserved **Data Immutability** using the **Spread Operator**. This creates a "copy" of the original array to perform operations, returning a new set of ordered data while the original array remains unchanged.

2. I used the **reduce()** method to create a **Hash Table**, optimizing title-based searches.

3. **DOM Performance Optimization**: I replaced direct `+=` concatenation inside `innerHTML` loops with the combined use of `.map()` and `.join("")`. This prevents unnecessary layout recalculations (_reflow_), allowing the browser to process the generated string and update the visual interface in a single operation.

**Created by João Paulo Almeida Aureliano**

---

### Versão em Português (PT-BR)

## NovelsCenter

Um sistema de resenhas sobre novels para praticar manipulação de arrays, objetos e algoritmos de busca.

## O que o sistema faz?

Atualmente as funcionalidades são:

1. **Busca Rápida**: Utilizando **Tabela Hash**, garanto **tempo constante O(1)** para encontrar novels pelo título.

2. **Ordenação Inteligente**: Utilizando os métodos `filter()`, `slice()` e `sort()`, o sistema retorna as top 3 novels de um gênero específico com as maiores notas.

3. **Normalização de Dados**: Com o `.toLocaleLowerCase()`, `.trim()` e com a combinação de `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`, o sistema unifica as strings fazendo com que o modo como o usuário digita seja convertido em strings "padrões". Se for com espaçamentos extras, letras maiúsculas/minúsculas e com acentos, o sistema garante precisão nas buscas mesmo com as variações na digitação.

4. **Filtro Dinâmico**: Utilizando o método `filter()`, é possível realizar uma filtragem dinâmica das novels por status de leitura.

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Git/GitHub**
- **HTML5**

## Lições Aprendidas

1. Preservei a **Imutabilidade** dos dados utilizando o **Spread Operator**, que basicamente cria uma "cópia" do array original e com essa cópia ele executa a função que lhe é feita, ou seja, a "cópia" do array foi criada e modificada e retorna um novo conjunto de dados ordenados, enquanto o array original permanece imutável.

2. Utilizei o método **reduce()** para criar uma **Tabela Hash** e assim otimizar as buscas através do título.

3. **Otimização da performance DOM**: Substituí o uso da concatenação direta "+=" no `innerHTML` dentro do laço pelo uso combinado de `.map()` e `.join("")`, onde serão evitadas renderizações repetidas desnecessárias (_reflow_), fazendo com que o navegador processe a string gerada e atualize a interface visual em uma única operação.

**Criado por João Paulo Almeida Aureliano**
