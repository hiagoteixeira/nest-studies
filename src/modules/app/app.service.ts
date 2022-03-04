import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getIdade(ano: number) {
    
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    return 'A idade do individuo é ' + idade + ' anos';
  }


}
