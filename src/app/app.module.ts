import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';  // Importamos HomeModule
import { AppRoutingModule } from './app-routing.module';  // Si estás usando rutas

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HomeModule,
    AppRoutingModule,  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
