import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components//button/button';
import { CardModule } from 'primeng/components/card/card';
import { InputTextModule } from 'primeng/components//inputtext/inputtext';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng//components/calendar/calendar';
import { CadastroAlunoComponent } from './../cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroTurmaComponent } from './cadastro-turma.component';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CadastroTurmaComponent],exports:[CadastroTurmaComponent]

})
export class CadastroTurmaModule { }
