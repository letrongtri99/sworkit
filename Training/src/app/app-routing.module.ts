import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-plan',
    loadChildren: () => import('./my-plan/my-plan.module').then( m => m.MyPlanPageModule)
  },  {
    path: 'my-plan-leaner',
    loadChildren: () => import('./my-plan-leaner/my-plan-leaner.module').then( m => m.MyPlanLeanerPageModule)
  },
  {
    path: 'my-plan-fitter',
    loadChildren: () => import('./my-plan-fitter/my-plan-fitter.module').then( m => m.MyPlanFitterPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
