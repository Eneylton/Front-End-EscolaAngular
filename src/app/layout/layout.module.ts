import { PesquisaTurmaModule } from './../pesquisa-turma/pesquisa-turma.module';
import { PesquisaTurmaComponent } from './../pesquisa-turma/pesquisa-turma/pesquisa-turma.component';
import { CadastroTurmaModule } from './../cadastro-turma/cadastro-turma.module';
import { CadastroTurmaComponent } from './../cadastro-turma/cadastro-turma.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalModule } from './../principal/principal.module';
import { PrincipalComponent } from './../principal/principal/principal.component';
import { CoreModule } from './../core/core.module';
import { CadastroAlunoComponent } from './../cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoModule } from './../cadastro-aluno/cadastro-aluno.module';

import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { PesquisaAlunoModule } from '../pesquisa-aluno/pesquisa-aluno.module';
import { PesquisaAlunoComponent } from '../pesquisa-aluno/pesquisa-aluno/pesquisa-aluno.component';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CadastroAlunoModule,
    PesquisaAlunoModule,
    PesquisaTurmaModule,
    PrincipalModule,
    CadastroTurmaModule,
    CoreModule,
    HttpModule,
    AppRoutingModule

  ],
  declarations: [TopoComponent, MenuComponent, ConteudoComponent, FooterComponent],
  exports:[TopoComponent,
           MenuComponent,
           ConteudoComponent,
           FooterComponent,
           CadastroAlunoComponent,
           PesquisaAlunoComponent,
           PrincipalComponent,
           PesquisaTurmaComponent]
})
export class LayoutModule { }
