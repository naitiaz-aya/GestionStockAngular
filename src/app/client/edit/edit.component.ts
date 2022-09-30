import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id!: number;
	client!: Client;
	form!: FormGroup;

	constructor(
		public clientService: ClientService,
		private route: ActivatedRoute,
		private router: Router
	  ) { }

  ngOnInit(): void {
	this.id = this.route.snapshot.params['clientId'];
    this.clientService.find(this.id).subscribe((data: Client)=>{
      this.client = data;
	}); 
		
	this.form = new FormGroup({
		nom: new FormControl('', [Validators.required]),
		prenom: new FormControl('', Validators.required),
		ville: new FormControl('', Validators.required),
		adresse: new FormControl('', Validators.required)
		});
	}

	get f(){
	return this.form.controls;
	}

	submit(){
	console.log(this.form.value);
	this.clientService.update(this.id, this.form.value).subscribe((res:any) => {
		console.log('Client updated successfully!');
		this.router.navigateByUrl('client/index');
	})
	}

}
