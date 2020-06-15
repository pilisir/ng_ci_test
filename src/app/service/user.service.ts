import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  user = { name: 'Sam Spade' };

  constructor() { }
}
