import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- هام جداً لـ Swiper
})
export class GallerySection {
  public slides: { img: string }[] = [];

  constructor() {
    // قم بإنشاء لوب لـ 19 صورة
    for (let i = 1; i <= 19; i++) {
      this.slides.push({
        img: `assets/gallery/g${i}.png` // <-- تم التصحيح إلى .png
      });
    }
  }
}
