import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./Home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./Manager/manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./History/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./Restock/restock/restock.module').then( m => m.RestockPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
