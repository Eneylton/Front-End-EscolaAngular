import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfessorService {

  professoresUrl = 'http://localhost:8080/professores';

  constructor(private http: Http) {}

  listarTodos(): Promise<any> {
    const headers = new Headers();

    return this.http.get(this.professoresUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }


}
