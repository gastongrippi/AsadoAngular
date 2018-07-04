import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './list/detalle/detalle.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asado',
    pathMatch: 'full'
  },
  {
    path: 'asado',
    component: ListComponent, children :[
      { path: 'detalle/:name/:price',
      component: DetalleComponent
    }
    ]
  }
  // si no se pone como un children de List, el detalle se carga abajo
  // tambien hay que agregar el <router-outlet></router-outlet> en el component.html correspondiente
  // { path: 'asado/detalle/:name',
  //   component: DetalleComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
