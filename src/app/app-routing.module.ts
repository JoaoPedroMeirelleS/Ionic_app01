import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./page/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./page/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./page/docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./db/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'db/faq',
    loadChildren: () => import('./db/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./page/faq/faq.module').then( m => m.FaqPageModule)
  },
   {
    path: 'manual',
    loadChildren: () => import('./db/manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
