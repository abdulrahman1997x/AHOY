import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.firebaseAuth.signOut().then(() => this.router.navigate(['login']));
  }
}
