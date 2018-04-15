import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

export class TurmaFiltro {

  nome: string;

  pagina = 0;

  itensPorPagina = 7;
}


@Injectable()
export class TurmaService {

  turmasDeleteURL = 'http://localhost:8080/turmas'

  turmasUrl = 'http://localhost:8080/turmas/turmaPaginacao';

  constructor(private http: Http) { }

  pesquisar(filtro: TurmaFiltro): Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }


    return this.http.get(`${this.turmasUrl}`, { headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const turmas = responseJson.content;

        const resultado = {
          turmas,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }

  remover(codigo:number): Promise<void> {
    const headers = new Headers();
    return this.http.delete(`${this.turmasDeleteURL}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }


}
