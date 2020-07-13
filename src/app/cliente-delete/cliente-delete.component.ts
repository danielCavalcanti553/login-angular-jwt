import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente : Cliente; 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private clienteServ : ClienteService) {

         

      this.route.paramMap.subscribe(resp=>{

          let id = resp.get('id');
          
          this.clienteServ.buscaById(id).subscribe(data=>{
            this.cliente = data;
          });
        
      });
    }

  ngOnInit(): void {
    
  }

  delete(){
    this.clienteServ.delete(this.cliente.id).subscribe(data=>{

      this.router.navigateByUrl("clientes");
    });
  }

  noDelete(){
    this.router.navigateByUrl("/clientes");
    
  }

}
