import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-find-includes',
  templateUrl: './filter-find-includes.component.html',
})
export class FilterFindIncludesComponent implements OnInit {
  // aula de filter(), find() e includes

  //Usa-se o filter para descobrir algo em um array ou objeto

  numeros = [2, 4, 6, 8, 10, 12, 33, 79, 1, 2,  15, 69, 2];
  numPar: number[] = [];
  num2Existe: number[] = [];
  num2ExisteComInclude: boolean [] = [];
  nomes: string []= ['Debora', 'Trude', 'Juan', 'Tony', 'Trude', 'TrudeA','TrudeB'];
  nomeA: any;
  nomeB : any;
  registro = [{nome:'Debora', idade: 41, cor: 'vermelho'},
              {nome: 'Juan', idade: 14, cor: 'verde'},
              {nome: 'Tony', idade: 47, cor: 'preto'},
              {nome: 'Trude', idade: 3, cor: 'verde'},
              {nome:'Debora', idade: 41, cor: 'vermelho'},

    ]

 corPreferida: any;
 nome1: any;
 nome2: any;

  constructor() {
  this.numPar = this.numeros.filter(item => item % 2 == 0);
  this.num2Existe = this.numeros.filter(n => n ==2);

  //fazer pesquisa dentro de um array ou objeto. Include é um metodo de pesquisa do find()
  this.num2ExisteComInclude.push(this.numeros.filter(n => n).includes(2));
  this.num2ExisteComInclude.push(this.numeros.filter(n=>n).includes(13));
  this.nomeA = this.nomes.filter(nm => nm).includes('Trude');
  this.nomeB = this.nomes.find(nm => nm)?.includes('Trudy');
  this.corPreferida = this.registro.filter(cor => cor.cor.includes('verde'));
  this.nome1 = this.registro.filter(nome => nome.nome == 'Debora');
  this.nome2 = this.registro.filter(a => a.nome.includes('Juan'));


  //startsWith --> junto com o filter, encontra a palavra iniciada pelo que se deseja
  const local  = this.nomes.filter(nm => nm.startsWith('Trude'));


  }

  ngOnInit(): void {

   console.group('Filter numeros');
    // console.table(this.numeros);
     console.table(this.numPar);
    // console.table(this.num2Existe);
    // console.table(this.num2ExisteComInclude);
    // console.table(this.nomeA);
    // console.table(this.nomeB);
    // console.log(this.corPreferida);
    // console.log(this.nome1);
    // console.log(this.nome2);


    console.groupEnd();
  }
}
