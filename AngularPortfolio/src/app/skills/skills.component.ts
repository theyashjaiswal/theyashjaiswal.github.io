import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'What I do💁‍♂️',
    subTitle: 'FULL STACK SOFTWARE DEVELOPER',
    skills: [
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
      '⚡ Creating application backend in Java, Node, Express & Flask',
      '⚡ Integration of third party services such as Firebase/ Heroku/ AWS',
      '⚡ Also, experienced in working with Integration tools such as MuleSoft and Tibco BW.',
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
