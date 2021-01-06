import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageComponent } from './views/page/page.component';
import { CategoryComponent } from './views/category/category.component';
import { AboutComponent } from './views/about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'page/:id', component: PageComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'create', component: CreatePostComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
