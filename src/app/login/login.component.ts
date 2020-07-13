import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/model/login';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { Message } from 'src/model/message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login;
  formGroup : FormGroup;
  message : Message;

  constructor(private formBuilder : FormBuilder, 
    private http:HttpClient,
    private auth : AuthService) {
    this.iniciarForm();
  }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      username : ['',[Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }

  tryRegister(){
    let d = this.auth.login(this.formGroup.value).subscribe(data=>{
      //console.log(data.body.message.code);
      this.message = data.body.message;
      if(this.message.code == 200){
        console.log("login válido");
      }else{
        console.log("login invalido");
      }
    });
  }

}
