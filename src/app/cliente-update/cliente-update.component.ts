import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/model/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  
  formGroup : FormGroup;
  cliente : Cliente = new Cliente;
  msg : string = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clienteServ : ClienteService,
    private formBuilder : FormBuilder) {

      this.iniciarForm();

      this.route.paramMap.subscribe(resp=>{
        let id = resp.get('id');
        this.clienteServ.buscaById(id).subscribe(data=>{
          this.cliente = data;
        });
      });
    }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(5),Validators.maxLength(120)] ],
      telefone: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(120)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteServ.update(this.cliente).subscribe(data=>{
      console.log(data);
      if(data.status===200){
        console.log('Cadastrado com sucesso!');
        this.msg = "Atualizado com sucesso!";
      }
    })
    
  }


  

}
