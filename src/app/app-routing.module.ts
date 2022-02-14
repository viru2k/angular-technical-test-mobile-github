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
    path: 'pelicula-details',
    loadChildren: () =>
      import(
        './pages/private/peliculas/pelicula-details/pelicula-details.module'
      ).then((m) => m.PeliculaDetailsPageModule),
  },

  {
    path: 'estudios',
    loadChildren: () =>
      import('./pages/private/estudios/company.module').then(
        (m) => m.CompanyPageModule
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
