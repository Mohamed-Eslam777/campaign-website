import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonial-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './testimonial-form.html',
  styleUrls: ['./testimonial-form.scss']
})
export class TestimonialFormComponent {
  testimonialForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // !!! هام: سنحتاج لرابط Formspree جديد هنا
  private formspreeEndpoint = 'https://formspree.io/f/xjkjpney';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.testimonialForm = this.fb.group({
      name: ['', Validators.required],
      town: [''], // اسم البلدة (اختياري)
      message: ['', [Validators.required, Validators.minLength(10)]] // الرسالة
    });
  }

  onSubmit() {
    if (this.testimonialForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post(this.formspreeEndpoint, this.testimonialForm.value, { headers: { 'Accept': 'application/json' } })
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.testimonialForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
  }
}
