import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  lista : Cliente[] = [];

  constructor(private clienteServ : ClienteService) {}

  ngOnInit(): void {
    
    this.clienteServ.getLista().subscribe(response=>{
      this.lista = response;
    })
  }

}
