import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    public firebaseAuth: AngularFireAuth
  ) {}

  signIn(email: string, password: string) {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password));
  }

  signup(email: string, password: string) {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password));
  }
}
