import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
//material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//Enum
import { EDialogPanelClass } from '../../enum/EDialogpanelClass.enum';
//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProject = signal<IProjects[]>([
    {
     src: 'assets/img/projects/academia.png',
     alt: 'Site de academia com PHP e MySQL' ,
     title: 'Site de academia',
     with: '100px',
     height: '51px',
     description: 'Cadastre alunos ou instrutores no site, alunos podem verificar seus treinos que são passados pelos administrador ou personal, remova qualquer aluno ou intrutor, e atualize seus treinos',
     link: [
      {
        name: 'Conheça sobre o site assistindo um video',
        href: 'https://drive.google.com/file/d/1wHbRwIwd3ID0mWnUjGRVRqWmcX3I_AKX/view?usp=sharing'
      }
     ]
    },
    {
      src: 'assets/img/projects/to-do-list.png',
      alt: 'Site de lista de tarefas' ,
      title: 'To do List',
      with: '100px',
      height: '51px',
      description: 'Cadastro de tarefas com as opções de completas e a em andamento, com button de delete que remove a tarefa',
      link: [
       {
         name: 'Conheça o site',
         href: 'https://to-do-list-a-b.netlify.app/'
       }
      ]
     }
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
