var Alunos = [
    {ID: 1, NOME: "João miguel", BIM1: 10, BIM2: 8.5, BIM3: 7.5, BIM4: 9.5, MEDIA: 8.8},
    {ID: 2, NOME: "Ycaro sales", BIM1: 7, BIM2: 6, BIM3: 4, BIM4: 3.5, MEDIA: 5},
    {ID: 3, NOME: "Gabriel muniz", BIM1: 3.5, BIM2: 5.5, BIM3: 7, BIM4: 2, MEDIA: 4.5},
    {ID: 4, NOME: "Wanessa camargo", BIM1: 10, BIM2: 10, BIM3: 10, BIM4: 10, MEDIA: 10}
];

for(var i = 0; i < Alunos.length; i++){
   if(Alunos[i].MEDIA >= 7){
    console.log(`${Alunos[i].ID} - ${Alunos[i].NOME}: Aprovado(a)`);
   };
   if(Alunos[i].MEDIA < 7){
    console.log(`${Alunos[i].ID} - ${Alunos[i].NOME}: Recuperação dia 23/12`);
   };
   if(Alunos[i].MEDIA === 10){
    console.log(`${Alunos[i].ID} - ${Alunos[i].NOME}:Parabéns, boas férias`);
   };
};