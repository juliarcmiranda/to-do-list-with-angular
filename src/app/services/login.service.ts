import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated: boolean = false;
  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private router: Router) { }

  logUser(email: string, password: string) {
    this.authenticated = (email === 'admin@admin.com' && password === '123456');
    this.showMenu.emit(this.authenticated);
    console.log(this.showMenu);
    if (this.authenticated) {
      localStorage.setItem("authenticated", JSON.stringify(this.authenticated));
      this.router.navigate(['home']);
    }

 }

  userIsLoggedIn(): boolean {
    let obj = localStorage.getItem("authenticated");
    if (obj) {
      this.authenticated = JSON.parse(obj);
      console.log("loguser: ", this.authenticated);
    }
    this.showMenu.emit(this.authenticated);
    return this.authenticated;
  }

  isLoggingOut() {
    localStorage.removeItem("authenticated");
    this.authenticated = false;
    this.showMenu.emit(this.authenticated);
    window.location.reload();
  }

}