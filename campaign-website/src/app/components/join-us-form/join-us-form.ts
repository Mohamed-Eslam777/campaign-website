import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-us-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './join-us-form.html',
  styleUrls: ['./join-us-form.scss']
})
export class JoinUsFormComponent {
  joinForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // !!! هام: استبدل هذا بالـ ID الخاص بك من Formspree
  private formspreeEndpoint = 'https://formspree.io/f/mkgkpllg';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.joinForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]] // للرقم المصري
    });
  }

  onSubmit() {
    if (this.joinForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post(this.formspreeEndpoint, this.joinForm.value, { headers: { 'Accept': 'application/json' } })
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.joinForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
  }
}
