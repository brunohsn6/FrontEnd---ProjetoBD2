import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlunoComponent } from './components/aluno/aluno.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { CursoComponent } from './components/curso/curso.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { TurmaComponent } from './components/turma/turma.component';
import { CadastrarTurmaComponent } from './components/cadastrar-turma/cadastrar-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    DisciplinaComponent,
    ProfessorComponent,
    CursoComponent,
    DashboardComponent,
    TurmaComponent,
    DepartamentoComponent,
    CadastrarTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
