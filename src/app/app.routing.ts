import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'posts/:id',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
