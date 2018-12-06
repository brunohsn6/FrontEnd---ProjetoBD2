import { CursoComponent } from './components/curso/curso.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { AppComponent } from './app.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { TurmaComponent } from './components/turma/turma.component';
import { CadastrarTurmaComponent } from './components/cadastrar-turma/cadastrar-turma.component';


export const routes: Routes = [

  { path: 'disciplina', component: DisciplinaComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'aluno', component: AlunoComponent },
  {path: 'departamento', component: DepartamentoComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'cadastrarTurma', component: CadastrarTurmaComponent},
  { path: '', component: DashboardComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
