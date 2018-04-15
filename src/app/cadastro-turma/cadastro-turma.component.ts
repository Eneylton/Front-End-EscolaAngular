import { Cadastroturmaervice } from './cadastro-turma.service';
import { Turma, Aluno } from './../core/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../core/error-handler.service';


@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.css']
})
export class CadastroTurmaComponent implements OnInit {

  aluno = new Aluno();
  turma = new Turma();

  constructor(
    private cadastroTurmaService : Cadastroturmaervice,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

    const codigoAluno = this.route.snapshot.params['codigo'];

    if (codigoAluno) {
      this.carregarTurma(codigoAluno);
    }

  }

  get editando() {
    return Boolean(this.turma.id)
  }

  carregarAluno(codigo: number) {
    this.cadastroTurmaService.buscarPorCodigoIdAluno(codigo)
      .then(aluno => {
        this.aluno = aluno;
      });
  }

  carregarTurma(codigo: number) {
    this.cadastroTurmaService.buscarPorCodigoIdTurma(codigo)
      .then(turma => {
        this.turma = turma;
      });
  }

  salvar(form: FormControl) {


      this.cadastroTurmaService.adicionar(this.turma);
      form.reset();
      this.toasty.success('Turma atualizado com sucesso!');


  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.turma.nome}`);
  }


}
