import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'actores',
    loadChildren: () =>
      import('./pages/private/actores/actores.module').then(
        (m) => m.ActoresPageModule
      ),
  },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./pages/private/peliculas/peliculas.module').then(
        (m) => m.PeliculasPageModule
      ),
  },
  {
    path: 'estudios',
    loadChildren: () =>
      import('./pages/private/estudios/estudios.module').then(
        (m) => m.EstudiosPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
