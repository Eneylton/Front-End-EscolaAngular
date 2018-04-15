import { ViewChild, Component, OnInit } from '@angular/core';
import { TurmaService } from './../turma.service';
import { TurmaFiltro } from '../turma.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-pesquisa-turma',
  templateUrl: './pesquisa-turma.component.html',
  styleUrls: ['./pesquisa-turma.component.css']
})

export class PesquisaTurmaComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  totalRegistros = 0;
  filtro = new TurmaFiltro();

  turmas = [];

  @ViewChild('tabela') grid;

  constructor(
    private pesquisaService: TurmaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService

  ) { }



  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pesquisaService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.turmas = resultado.turmas;
    });
}


  confirmarExclusao(turma: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(turma);
      }
    });
  }



  excluir(turma: any) {
    this.pesquisaService.remover(turma)
      .then(() => {
        if (this.grid.first === 0){
          this.pesquisar();
        }else{

          this.grid.first = 0;
        }

        this.toasty.success('Turma excluído com sucesso!');
      });
  }


  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
