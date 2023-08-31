import { Component } from '@angular/core';
class Users{
  username:string="";
  password:string="";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 user:Users = new Users();
  

  save() {
  //  console.log("sucess");  
  alert(this.user.username) 
  }

}
