import { Component } from '@angular/core';
import { Pieza } from '../../clases/pieza';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memotest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memotest.component.html',
  styleUrl: './memotest.component.css'
})
export class MemotestComponent {
  public piezas: Array<Pieza> = new Array<Pieza>();

  
  constructor(){
    let cantPiezas = 8;
    let numeros:number[] = new Array<number>();
    while(numeros.length< cantPiezas){
      let valor = Math.floor(Math.random() * (cantPiezas/2));
      //Se puede poner la funcion como x=> return x == valor (si, eso es una función)
      if (valor<(cantPiezas/2) && numeros.filter(  x=>{ return x == valor }).length < 2)
      numeros.push(valor);
    }

    numeros.forEach(element => {
      let imagen = "";
      switch(element) {
        case 0: 
        imagen = 'https://imgs.search.brave.com/NbF5aWIA4z3ggMbygJqQYclqfBvVNU2dQsdnGW0TF2Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk0/MDM3NDYwL3Bob3Rv/L29yYW5nZS1mcnVp/dC1pc29sYXRlZC1v/bi1hLXdoaXRlLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVBv/ZHB5ajJmdmlHNzZt/Q1NzcjNhUjZPM3Q0/bzNMZGthaFRIU1Uw/R0JDbVE9';
        break;
        case 1:
          imagen = 'https://imgs.search.brave.com/yvdQYSnJp0tLS0uT5iKKmHmg8j5I25cAmulBABoWj2s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/ZnJlc2NhLXRleHR1/cmEtdml0YW1pbmEt/ZnJ1dGEtY3J1ZGFf/MTE3Mi0yMjAuanBn/P3NpemU9NjI2JmV4/dD1qcGc';
          break;
        case 2:
          imagen = 'https://imgs.search.brave.com/XdwkjcaDBPQjrfL8HuAxziOzwgOf98qTSsg_DK6yjIk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5oZXJhbGRv/LmVzL2ZpbGVzL2lt/YWdlXzk5MF92My91/cGxvYWRzL2ltYWdl/bmVzLzIwMTYvMDMv/MzEvXzE2Mzc4NzE5/NTgxNTdhNjhlMWUz/ZXpfZGYwMDAwNDUu/anBn';
          break;
          case 3:
            imagen = 'https://imgs.search.brave.com/7FFonZfd89peYAFnYcwv1BdUAqWopLwJaD2119tGQNc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9ydGlmcnV0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOC9kZXNjLWZy/dXRpbGxhcy5qcGc';
            break; 
      }
      this.piezas.push({imagen:imagen, descubierta:false, seleccionada:false});
    });
  }
validar(){

}

}
