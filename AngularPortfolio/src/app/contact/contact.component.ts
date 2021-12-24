import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'Contact Me ☎️',
    subtitle: 'Discuss a project or just want to say hi?',
    number: '+1-782-8822-600',
    email_address: 'yashjaiswalofficial@gmail.com',
  };
  constructor() {}

  ngOnInit(): void {}
}
