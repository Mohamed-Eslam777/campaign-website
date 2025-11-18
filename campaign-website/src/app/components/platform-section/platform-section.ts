import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // (!!!) استيراد المكتبة
import { faBookOpen, faHeartPulse, faSeedling, faBuildingUser } from '@fortawesome/free-solid-svg-icons'; // (!!!) استيراد الأيقونات

@Component({
  selector: 'app-platform-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // (!!!) إضافة المكتبة هنا
  templateUrl: './platform-section.html',
  styleUrl: './platform-section.scss'
})
export class PlatformSection {
  // (!!!) تعريف الأيقونات علشان الـ HTML يشوفها
  faBookOpen = faBookOpen;
  faHeartPulse = faHeartPulse;
  faSeedling = faSeedling;
  faBuildingUser = faBuildingUser;
}