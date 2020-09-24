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
  },
  {
    path: 'my-plan-leaner',
    loadChildren: () => import('./my-plan-leaner/my-plan-leaner.module').then( m => m.MyPlanLeanerPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./pages/price/price.module').then( m => m.PricePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'my-plan-fitter',
    loadChildren: () => import('./my-plan-fitter/my-plan-fitter.module').then( m => m.MyPlanFitterPageModule)
  },
  {
    path: 'create-custom-wokrout-modal',
    loadChildren: () => import('./create-custom-wokrout-modal/create-custom-wokrout-modal.module').then( m => m.CreateCustomWokroutModalPageModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./pages/reminders/reminders.module').then( m => m.RemindersPageModule)
  },
  {
    path: 'mini-modal',
    loadChildren: () => import('./mini-modal/mini-modal.module').then( m => m.MiniModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
