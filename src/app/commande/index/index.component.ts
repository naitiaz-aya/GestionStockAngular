import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service'
import { Commande } from '../commande'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexCommandeComponent implements OnInit {

	commandes: Commande[] = [];
	constructor(public commandeService: CommandeService) { }
     

  ngOnInit(): void {
	this.commandeService.getAll().subscribe((data: Commande[])=>{
		this.commandes = data;
		console.log(this.commandes);
	  }) 
  }

  deleteCommande(id:number){
    this.commandeService.delete(id).subscribe(res => {
         this.commandes = this.commandes.filter(item => item.id !== id);
         console.log('Commande deleted successfully!');
    })
  }
}
