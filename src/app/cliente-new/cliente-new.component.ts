import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-new',
  templateUrl: './cliente-new.component.html',
  styleUrls: ['./cliente-new.component.css']
})
export class ClienteNewComponent implements OnInit {
  
  formGroup : FormGroup;
  msg : string = null;

  constructor(private clienteServ : ClienteService,
    private formBuilder : FormBuilder)  {
      this.iniciarForm();
    }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(5),Validators.maxLength(120)] ],
      telefone: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(120)]]
    })
  }

  onSubmit(){
    this.clienteServ.new(this.formGroup.value).subscribe(data=>{
      console.log(data);
      if(data.status===201){
        console.log('Cadastrado com sucesso!');
        this.formGroup.reset();
        this.msg = "Cadastrado com sucesso!";
      }
    })
    
  }
}
