import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss'],
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'fab fa-html5',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'fab fa-css3-alt',
      },
      {
        skillName: 'SASS',
        fontAwesomeClassname: 'fab fa-sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'Angular',
        fontAwesomeClassname: 'fab fa-angular',
      },
      {
        skillName: 'React',
        fontAwesomeClassname: 'fab fa-react',
      },
      {
        skillName: 'Nodejs',
        fontAwesomeClassname: 'fab fa-node',
      },
      {
        skillName: 'NPM',
        fontAwesomeClassname: 'fab fa-npm',
      },
      {
        skillName: 'SQL',
        fontAwesomeClassname: 'fas fa-database',
      },
      {
        skillName: 'Python',
        fontAwesomeClassname: 'fab fa-python',
      },
      // {
      //   skillName: 'Firebase',
      //   fontAwesomeClassname: 'simple-icons:firebase',
      // },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
