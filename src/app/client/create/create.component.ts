import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	form!: FormGroup;

	constructor(
		public clientService: ClientService,
		private router: Router
	) { }

	ngOnInit(): void {
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
		this.clientService.create(this.form.value).subscribe((res:any) => {
			console.log('Client created successfully!');
			this.router.navigateByUrl('client/index');
		})
	}
}
