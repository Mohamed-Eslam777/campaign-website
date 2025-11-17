import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // FormsModule

@Component({
  selector: 'app-testimonials-display',
  standalone: true,
  imports: [CommonModule, FormsModule], // أضف FormsModule
  templateUrl: './testimonials-display.html',
  styleUrls: ['./testimonials-display.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // هام لـ Swiper
})
export class TestimonialsDisplayComponent {
  
  // (!!!) على المستخدم تغيير هذه البيانات بالرسائل الحقيقية
  public testimonials = [
    {
      message: "بكل فخر ندعم المهندس رزق مصطفى. خبرته الطويلة كوكيل لوزارة الري هي بالضبط ما تحتاجه الدائرة لتحويل مشاكلنا إلى حلول حقيقية على أرض الواقع.",
      name: "محمد اسلام مقلد",
      town: "دسوق"
    },
    {
      message: "صوتنا للمهندس رزق لأنه صوت النزاهة والأمانة. رجل نثق به ليمثلنا ويدافع عن حقوقنا في البرلمان. كل الدعم لخير من يمثلنا.",
      name: "بلال عبد العاطي خطاب",
      town: "مطوبس"
    },
    {
      message: "مستقبل دائرتنا يحتاج إلى رجل دولة بحجم المهندس رزق مصطفى. نحن نقف خلفه قلباً وقالباً من أجل مستقبل أفضل لأبنائنا.",
      name: "احمد عبد القادر السويسى",
      town: "فوه"
    },
    {
      message: "بكل فخر ندعم و نؤيد المهندس رزق مصطفى علي ان يكون خير ممثل لنا في البرلمان انشاء الله و يجب علينا جميعا ان نقف كلنا خلف هذا الرجل لانه خير ممثل عنا و هوا اكثر من يستحق الدعم و التاييد", 
      name: "احمد فتحي الحبشي",
      town: "دسوق / لاصيفر البلد"
    }
  ];
}
