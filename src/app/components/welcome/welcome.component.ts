import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcome: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.showWelcomeMessage();
  }

  showWelcomeMessage() {
    this.welcome = this.userService.isLoggedIn ? 'Welcome, ' + this.userService.user.name : 'Please log in';
  }
}
