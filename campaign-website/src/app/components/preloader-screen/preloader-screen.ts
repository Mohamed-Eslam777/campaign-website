import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader-screen.html',
  styleUrls: ['./preloader-screen.scss']
})
export class PreloaderScreenComponent implements OnInit {
  hidePreloader = false;

  ngOnInit(): void {
    // إخفاء الشاشة بعد 2 ثانية
    setTimeout(() => {
      this.hidePreloader = true;
    }, 2000); // (يمكنك تقليل أو زيادة المدة)
  }
}
