import { PesquisaTurmaComponent } from './pesquisa-turma/pesquisa-turma.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    DataTableModule,
    FormsModule,
    RouterModule
  ],
  declarations: [PesquisaTurmaComponent],exports:[PesquisaTurmaComponent]
})
export class PesquisaTurmaModule { }
