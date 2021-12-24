import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: 'Master of Applied Computer Science',
      duration: '2022',
      subtitle: 'Dalhousie University, Halifax, Canada',
      content: '',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left',
    },
    {
      heading: 'B.Tech in Computer Science & Engineering',
      duration: '2018',
      subtitle: 'Karunya Institute of Technology & Sciences, Coimbatore, India',
      content: '',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
