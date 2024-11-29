import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePage],  // Declaramos HomePage aquí
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [HomePage],  // Exportamos HomePage si se necesita fuera de este módulo
})
export class HomeModule {}