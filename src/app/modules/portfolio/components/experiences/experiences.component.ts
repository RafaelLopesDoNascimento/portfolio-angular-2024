import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvimento PHP | Concluido",
        p: "Udemy - Hora de Codar - 33 horas"
      },
      text: "<p>Curso de desenvolvimento em PHP do basico ao avançado, com introdução ao MySQL e orientação a objetos no Banco de dados usando PDO</p>"
    },
    {
      summary: {
        strong: "Treinamento Back-End | Concluidp",
        p: "Ada Tech - 8 horas"
      },
      text: "<p>Curso de desenvolvimento back-end introduzindo conceitos de orientação a objetos em java e javascript, logica de programação, git e github</p>"
    },
    {
      summary: {
        strong: "Desenvolvimento Java Orientado a Objetos| Em andamento",
        p: "Udemy - 55 horas"
      },
      text: "<p>Curso de desenvolvimento em Java do basico ao avançado, com introdução ao Spring Boot e foco na orientação a objetos</p>"
    },
    {
      summary: {
        strong: "Desenvolvimento Angular + Typescript| Em andamento",
        p: "Udemy - 45 horas"
      },
      text: "<p>Curso de desenvolvimento em Angular com Typescript do basico ao avançado manipulando dados nas versões novas e antigas do Angular</p>"
    },
    {
      summary: {
        strong: "Desenvolvimento FullStack Javascript | Em andamento",
        p: "OnebitCode - 400 horas"
      },
      text: "<p>Curso de desenvolvimento FullStack em Javascript introduzindo tacnologias como HTML, CSS, Sass, Bootstrap, Angular, React, Nodejs, Javascript, MongoDB, PostgreSQL e Bulma</p>"
    },

  ])
}
