import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login(userName: any, password: any){

    if(userName === 'radif' && password === 'radif'){
      sessionStorage.setItem("isLoggedIn", "true");

      // Set the user's role
      sessionStorage.setItem("userRole", "admin"); // Set the user's role as admin for example
      
    }else {
      sessionStorage.setItem("isLoggedIn", "false");
    }

  }

}
