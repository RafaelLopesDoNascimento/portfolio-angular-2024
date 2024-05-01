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
        name: 'conheca sobre o site assistindo um video',
        href: 'https://drive.google.com/file/d/1wHbRwIwd3ID0mWnUjGRVRqWmcX3I_AKX/view?usp=sharing'
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
