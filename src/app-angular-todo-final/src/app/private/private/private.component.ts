import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/public/login.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  logout() {
    this.loginService.logout();
  }

  getName() {
    return (localStorage.getItem('login'))
      ? JSON.parse(localStorage.getItem('login')).user.name
      : '';
  }
}
