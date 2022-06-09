import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    {
      imageSrc:
        '../../assets/images/carousel/slider_img.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        '../../assets/images/carousel/intro-1622649356.webp',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        '../../assets/images/carousel/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera-with-shopping-bag-blue-pastel-background-copy-space_1258-856.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        '../../assets/images/carousel/portrait-expressive-young-woman-holding-shopping-bags_1258-48200.webp',
      imageAlt: 'person2',
    },
  ]
}
