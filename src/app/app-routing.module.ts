import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'atlp',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },  
  { path: '', redirectTo: 'atlp', pathMatch: 'full' },
  { path: '**', redirectTo: 'atlp' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
