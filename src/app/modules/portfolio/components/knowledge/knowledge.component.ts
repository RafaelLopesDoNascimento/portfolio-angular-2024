import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone do Html5'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone do Angular'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone do CSS3'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone do Java'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone do Javascript'
    },
    {
      src: 'assets/icons/knowledge/mongodb.png',
      alt: 'Icone do MongoDB'
    },
    {
      src: 'assets/icons/knowledge/mysql.png',
      alt: 'Icone do MySQL'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone do Nodejs'
    },
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Icone do PHP'
    },
    {
      src: 'assets/icons/knowledge/postgresql.png',
      alt: 'Icone do PostgreSQL'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Icone do React'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone do Sass'
    }
  ])
}
