import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCU1-OENQ5Xa2k1M091sKV02Y-qyqu3a6E',
      authDomain: 'ahoy-test.firebaseapp.com',
      projectId: 'ahoy-test',
      storageBucket: 'ahoy-test.appspot.com',
      messagingSenderId: '72716979385',
      appId: '1:72716979385:web:3e984293882eb780b45f68',
    }),
  ],
})
export class LoginModule {}
