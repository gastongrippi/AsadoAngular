import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	
	@Input () asado
	@Output () elementAsado = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  getAsadoInfo(asado) {
  	this.elementAsado.emit(asado);
  }

}
