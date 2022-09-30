import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service'
import { Client } from '../client'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexClientComponent implements OnInit {

	clients: Client[] = [];
	constructor(public clientService: ClientService) { }
     

  ngOnInit(): void {
	this.clientService.getAll().subscribe((data: Client[])=>{
		this.clients = data;
		console.log(this.clients);
	  }) 
  }

  deleteClient(id:number){
    this.clientService.delete(id).subscribe(res => {
         this.clients = this.clients.filter(item => item.id !== id);
         console.log('Client deleted successfully!');
    })
  }

}
