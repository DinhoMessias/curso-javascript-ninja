
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myVar = ['dinho', 29, true, null, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
	return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function getItem(array, indice){
	return array[indice];
};


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arr = ['dinho', 29, true, null, undefined ];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log("");
console.log(myFunction(arr));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro){
	var livros = {
		'A Metamorfose':{
			quantidadePaginas: 93,
			autor: 'Franz Kafka',
			editora: 'Ediouro' 
		},
		'O Alienista':{
			quantidadePaginas: 96,
			autor: 'Machado de Assis',
			editora: 'Atica' 	
		},
		'A Espiã':{
			quantidadePaginas: 184,
			autor: 'Paulo Coelho',
			editora: 'Paraleça' 	
		}
	}
	if (nomeLivro === undefined) {
		return livros;
	} else {
		return livros[nomeLivro];
	}
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log("");
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomeLivro = 'A Espiã'
console.log("");
console.log("O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var nomeLivro = 'O Alienista'
console.log("");
console.log("O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + "." );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro = 'A Metamorfose'
console.log("");
console.log("O livro " + nomeLivro + " foi publicado pela editora " + book(nomeLivro).editora + ".");
