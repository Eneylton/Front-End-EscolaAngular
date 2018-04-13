import { CoreModule } from './../core/core.module';
import { CadastroAlunoComponent } from './../cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoModule } from './../cadastro-aluno/cadastro-aluno.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { PesquisaAlunoModule } from '../pesquisa-aluno/pesquisa-aluno.module';
import { PesquisaAlunoComponent } from '../pesquisa-aluno/pesquisa-aluno/pesquisa-aluno.component';

import { AppRoutingModule } from '../app-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    CadastroAlunoModule,
    PesquisaAlunoModule,
    CoreModule,
    HttpModule,
    AppRoutingModule

  ],
  declarations: [TopoComponent, MenuComponent, ConteudoComponent, FooterComponent],
  exports:[TopoComponent,MenuComponent,ConteudoComponent,
           FooterComponent, CadastroAlunoComponent,PesquisaAlunoComponent]
})
export class LayoutModule { }
