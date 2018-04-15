import { PesquisaTurmaComponent } from './pesquisa-turma/pesquisa-turma/pesquisa-turma.component';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { PesquisaAlunoComponent } from './pesquisa-aluno/pesquisa-aluno/pesquisa-aluno.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: 'principal', component: PrincipalComponent },
  { path: 'alunos', component: PesquisaAlunoComponent },
  { path: 'alunos/:codigo', component: CadastroAlunoComponent },
  { path: 'turmas/:codigo', component: CadastroTurmaComponent },
  { path: 'turmas', component: PesquisaTurmaComponent },
  { path: 'alunos/novo', component: CadastroAlunoComponent },
  { path: 'turmas/novo', component: CadastroTurmaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
