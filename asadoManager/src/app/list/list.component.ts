import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	
	asado = {};
	show = false;
	asadoList = [

	{
	name: "asadoEjemplo",
	price: "80"
	},

	{
	name: "asado pro",
	price: "200"
	}

	];


  constructor() { }

  ngOnInit() {
  }

  showDetail (asado) {
  	if (this.asado === asado){
  		this.show = false;
  	} else {
  		this.asado = asado;
  		this.show = true;
  	}
  }

}
