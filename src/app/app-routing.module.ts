import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainPageModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'vista-profe',
    loadChildren: () =>
      import('./pages/vista-profe/vista-profe.module').then(
        (m) => m.VistaProfePageModule
      ),
    //canActivate: [AuthGuard],
  },
  {
    path: 'iniciar-clase',
    loadChildren: () =>
      import('./pages/iniciar-clase/iniciar-clase.module').then(
        (m) => m.IniciarClasePageModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./pages/error404/error404.module').then(
        (m) => m.Error404PageModule
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
