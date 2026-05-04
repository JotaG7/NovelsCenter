# NovelsCenter

A novel review system built to practice array manipulation, objects, and search algorithms.

## Features

Currently, the system includes:

1. **Fast Search**: Using a **Hash Table** to ensure **O(1) constant time** when finding novels by title.

2. **Smart Sorting**: Using filter(), slice(), and sort() methods to return the top 3 novels of a specific genre based on the highest ratings.

3. **Data Normalization**: Using toLocaleLowerCase()andtrim() to ensure search precision, even with extra spaces or case variations.

4. **Dynamic Filter**: Using the filter() method to allow dynamic filtering of novels by their reading status.

## Technologies- **JavaScript (ES6+)**- **Git/GitHub**- **HTML5**

## Lessons Learned

1. I preserved **Data Immutability** using the **Spread Operator**. This creates a "copy" of the original array to perform operations, returning a new set of ordered data while the original array remains unchanged.

2. I used the **reduce()** method to create a **Hash Table**, optimizing title-based searches.

**Created by João Paulo Almeida Aureliano**

---

### Versão em Português (PT-BR)

## NovelsCenter

Um sistema de resenhas sobre novels para praticar manipulação de arrays, objetos e algoritmos de busca.

## O que o sistema faz ?

atualmente as funcionalidades são:

1. **Busca Rapida**: Utilizando **Tabela Hash** garanto **tempo constante O(1)** para encontrar novels pelo titulo.

2. **Ordenação Inteligente**: Utilizando os metodos **filter()**, **slice()** e **sort()** o sistema retona as top 3 novels de um gênero especifico com as maiores notas.

3. **Normalização de Dados**: Com o **toLocaleLowerCase()** e **trim()** garanto precisão nas buscas mesmo com espaçamentos extras e/ou variações de letras maiúsculas/minúsculas.

4. **Filtro de Dinâmico**: Utilizando o metodo **filter()** é possivel realizar uma filtragem dinamica das novels por status de leitura.

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Git/GitHub**
- **HTML5**

## Lições Aprendidas

1. Preservei a **Imutabilidade** dos dados utilizando o **Spread Operator** que basicamente cria uma "copia" do array original e com essa copia ele executa a função que lhe é feita, ou seja, a "copia" do array foi criada e modificada e retorna um novo conjunto de dados ordenados, enquanto o array original permanece imutavel.

2. Utilizei o metodo **reduce()** para criar uma **tabela Hash** e assim otimizar as buscas através do titulo.

**Criado por João Paulo Almeida Aureliano**
