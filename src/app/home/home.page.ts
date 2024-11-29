import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  emailForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {}

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async sendEmail() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      const toast = await this.toastController.create({
        message: `Correo enviado a: ${email}`,
        duration: 2000,
        color: 'success',
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, ingresa un correo válido.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}