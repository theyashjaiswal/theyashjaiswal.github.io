import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {
    github: 'https://github.com/theyashjaiswal',
    linkedin: 'https://www.linkedin.com/in/theyashjaiswal/',
    gmail: 'yashjaiswalofficial@gmail.com',
    instagram: 'https://www.instagram.com/theyashjaiswal?hl=en',
    facebook: 'https://www.facebook.com/yashjaiswalmusic',
  };
  constructor() {}

  ngOnInit(): void {}
}
