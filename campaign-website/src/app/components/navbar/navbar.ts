import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // (!!!) لازم نضيف دي

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // (!!!) لازم نضيف دي
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  
  isMenuOpen = false; // (!!!) متغير للتحكم في منيو الموبايل

  // دالة لفتح وقفل المنيو
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}