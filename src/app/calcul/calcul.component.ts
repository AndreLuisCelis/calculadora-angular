import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  numeroAtual = '0';
  primeiraOperacao = null;
  operador = null;
  esperarsegundoNumero = false;



  constructor() { }

  ngOnInit(): void {
  }

  public getNumber(v: string) {
    console.log(v);
    if (this.esperarsegundoNumero) {
      this.numeroAtual = v;
      this.esperarsegundoNumero = false;
    } else {
      this.numeroAtual === '0' ? this.numeroAtual = v : this.numeroAtual += v;
    }
  }

  getDecimal() {
    if (!this.numeroAtual.includes('.')) {
      this.numeroAtual += '.';
    }
  }

  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.primeiraOperacao += secondOp;
      case '-':
        return this.primeiraOperacao -= secondOp;
      case '*':
        return this.primeiraOperacao *= secondOp;
      case '/':
        return this.primeiraOperacao /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string) {
    console.log(op);
    if (this.primeiraOperacao === null) {
      this.primeiraOperacao = Number(this.numeroAtual);
    } else if (this.operador) {
      const result = this.doCalculation(this.operador, Number(this.numeroAtual))
      this.numeroAtual = String(result);
      this.primeiraOperacao = result;
    }
    this.operador = op;
    this.esperarsegundoNumero = true;
    console.log(this.primeiraOperacao);
  }

  public clear(){
    this.numeroAtual = '0';
    this.primeiraOperacao = null;
    this.operador = null;
    this.esperarsegundoNumero = false;
    }

}
