import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'atlp', pathMatch: 'full' },
  {
    path: 'atlp',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  // { path: '**', redirectTo: 'atlp' },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
