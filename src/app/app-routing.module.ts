import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'products',
  //   component: ProductListComponent
  // },
  // {
  //   path: 'products/:id/edit',
  //   component: ProductEditComponent
  // },
  // {
  //   path: 'products/new',
  //   component: ProductCreateComponent
  // },
  // {
  //   path: 'products/detail',
  //   component: ProductDisplayComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
