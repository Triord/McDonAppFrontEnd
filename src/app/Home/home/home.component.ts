import { AuthenticationService, AUTHENTICATED_USER } from './../../Service/authentication.service';
import { LoginComponent } from './../../Login/login/login.component';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  l: boolean = false;
  n: string ='test';

  constructor(private log: AuthenticationService) { }

  ngOnInit() {
    console.log("avant"+this.l);
    if (this.log.getAuthenticatedUser()){
      this.l = true;
      console.log("apres"+this.l);
      console.log(this.log.getAuthenticatedUser());
    }

  }
  changeColor(id){
    document.getElementById(id).style.color = '#008000';

    console.log(this.n);

  }
del(id){
  document.getElementById(id).remove();
}


}
