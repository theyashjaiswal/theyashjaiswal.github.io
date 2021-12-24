import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: '',
    },
  ];
  constructor(public apollo: Apollo) {}

  ngOnInit(): void {}
}
