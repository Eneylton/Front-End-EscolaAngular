import { Turma, Aluno } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class Cadastroturmaervice {

  alunoUrl = 'http://localhost:8080/alunos';
  turmaUrl = 'http://localhost:8080/turmas';

  constructor(private http: Http) { }

  buscarPorCodigoIdAluno(codigo: number): Promise<Aluno> {
    const headers = new Headers();
          headers.append('Content-Type', 'application/json');

          console.log(codigo);

    return this.http.get(`${this.alunoUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const aluno = response.json() as Aluno;
    return aluno;
      });
  }


  buscarPorCodigoIdTurma(codigo: number): Promise<Turma> {
    const headers = new Headers();
          headers.append('Content-Type', 'application/json');

          console.log(codigo);

    return this.http.get(`${this.turmaUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const turma = response.json() as Turma;
    return turma;
      });
  }


  adicionar(turma: Turma): Promise<Turma> {
    const headers = new Headers();
          headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.turmaUrl}/${turma.id}`,
        JSON.stringify(turma), { headers })
        .toPromise()
        .then(response => response.json());
      }
  }


