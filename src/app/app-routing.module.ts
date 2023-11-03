import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'ingreso-usuario',
    pathMatch: 'full',
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () =>
      import('./pages/ingreso-usuario/ingreso-usuario.module').then(
        (m) => m.IngresoUsuarioPageModule
      ),
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () =>
      import(
        './pages/restablecer-contrasena/restablecer-contrasena.module'
      ).then((m) => m.RestablecerContrasenaPageModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
