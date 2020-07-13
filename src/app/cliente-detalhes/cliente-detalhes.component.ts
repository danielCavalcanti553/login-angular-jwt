import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {
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
    let op = confirm('deseja excluir?');
    if(op==true){
      this.clienteServ.delete(this.cliente.id);
      this.cliente = new Cliente();
    }
  }

}
