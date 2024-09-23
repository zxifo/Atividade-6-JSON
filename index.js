let aluno = {
    nome: "João Silva",
    idade: 21,
    curso: "Engenharia de Software",
    notas: [7.5, 8.0, 9.0]
};

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Primeira nota: ${aluno.notas[0]}`);

aluno.idade = 22;
aluno.notas.push(9.5);

console.log(aluno);

let alunoJSON = JSON.stringify(aluno);
console.log("Objeto convertido em string JSON:", alunoJSON);

let alunoObj = JSON.parse(alunoJSON);
console.log("Objeto convertido de volta:", alunoObj);

for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
}

let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};
console.log(aluno);

console.log(`Cidade: ${aluno.endereco.cidade}`);
console.log(`Estado: ${aluno.endereco.estado}`);

let alunos = [
    {
        nome: "João Silva",
        idade: 22,
        curso: "Engenharia de Software",
        notas: [7.5, 8.0, 9.5],
        endereco: { rua: "Rua das Flores", cidade: "São Paulo", estado: "SP" }
    },
    {
        nome: "Maria Souza",
        idade: 20,
        curso: "Ciência da Computação",
        notas: [9.0, 9.5, 10.0],
        endereco: { rua: "Avenida Brasil", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
        nome: "Pedro Almeida",
        idade: 23,
        curso: "Engenharia de Software",
        notas: [6.0, 7.5, 8.0],
        endereco: { rua: "Rua das Palmeiras", cidade: "Belo Horizonte", estado: "MG" }
    }
];

console.log(alunos);

let alunosComMediaAlta = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
});
console.log("Alunos com média maior que 8:", alunosComMediaAlta);
