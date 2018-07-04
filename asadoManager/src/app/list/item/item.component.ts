import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	
	@Input () asado
	@Output () elementAsado = new EventEmitter<String>();

  constructor( 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToAsado(asado) {
    //this.elementAsado.emit(asado);
    this.router.navigate([`/asado/detalle/${asado.name}/${asado.price}`]);
  }

}
