import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "IT Developer - CS01",
        company: "Canada Revenue Agency",
        color: "#015a95",
        companylogo: "../../../assets/images/CAN-Revenue-Agency.jpeg",
        date: "Dec. 2021 - Current",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Working as a Fullstack developer using Angular & Java.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "IT Developer Intern",
        company: "Canada Revenue Agency",
        color: "#015a95",
        companylogo: "../../../assets/images/CAN-Revenue-Agency.jpeg",
        date: "Sep. 2021 - Dec. 2021",
        desc: "Worked as a Front-end developer using Angular.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Systems Engineer",
        company: "Infosys",
        color: "#3781c2",
        companylogo: "../../../assets/images/infosys.png",
        date: "Sep. 2018 – Feb. 2020",
        desc: "Worked as a Systems Engineer to Integrate complex data using MuleSoft.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
