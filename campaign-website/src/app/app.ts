import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { PlatformSection } from './components/platform-section/platform-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { TestimonialsDisplayComponent } from './components/testimonials-display/testimonials-display';
import { NavbarComponent } from './components/navbar/navbar';
import { TestimonialFormComponent } from './components/testimonial-form/testimonial-form';
import { JoinUsFormComponent } from './components/join-us-form/join-us-form';
import { FooterSection } from './components/footer-section/footer-section';
import { NgParticlesModule } from 'ng-particles';
import type { Container, Engine, IOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

// (!!!) الإصلاح: الديكور @Component يجب أن يكون هنا (خارج الكلاس)
@Component({
  selector: 'app-root',
  standalone: true, // <-- هذا ضروري لمشروعنا
  imports: [
    RouterOutlet,
    HeroSection,
    AboutSection,
    PlatformSection,
    GallerySection,
    NavbarComponent,
    TestimonialsDisplayComponent,
    TestimonialFormComponent,
    JoinUsFormComponent,
    FooterSection,
    NgParticlesModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // كل الخصائص (Properties) والدوال (Methods) يجب أن تكون هنا (داخل الكلاس)
  
  protected readonly title = signal('campaign-website');

  // الكود الذي لصقته بشكل صحيح
  public particlesOptions: any = {
    background: {
      color: {
        value: '#0a192f', // اللون الكحلي
      },
    },
    fpsLimit: 120, // أداء أعلى
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // يدفع النقط بعيداً عند مرور الماوس
        },
        onClick: {
          enable: true,
          mode: 'push', // يضيف نقط جديدة عند الضغط
        },
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      // (!!!) التعديل الأهم: الخطوط
      links: {
        color: '#FFD700', // لون الخطوط (ذهبي)
        distance: 150,
        enable: true, // <-- تفعيل الخطوط
        opacity: 0.2, // <-- خافتة جداً (علشان تكون رايقة)
        width: 1,
      },
      // تعديل النقط
      color: {
        value: '#ffffff', // لون النقط (أبيض)
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'out', // تخرج بره الشاشة
        random: false,
        speed: 2, // سرعة أبطأ
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // عدد النقط
      },
      opacity: {
        value: 0.3, // شفافية النقط
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 }, // حجم النقط
      },
    },
    detectRetina: true,
  };

  // (!!!) الإصلاح: هذه الدوال يجب أن تكون داخل الكلاس
  particlesLoaded(container: Container): void {
    console.log('Particles loaded', container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
  
} // <-- هذا هو القوس الذي يغلق الكلاس