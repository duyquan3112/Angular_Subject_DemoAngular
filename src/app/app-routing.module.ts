import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CpuTableComponent } from './cpu-table/cpu-table.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { InsertNodeComponent } from './insert-node/insert-node.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageContentComponent } from './page-content/page-content.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    canActivate: [AuthGuard],//khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
    children: [
      { path: 'table/vga', component: PageContentComponent },
      { path: 'table/cpu', component: CpuTableComponent },
      { path: 'insert', component: InsertNodeComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginLayoutComponent },
  { path: '**', component: LoginLayoutComponent },// '**' có ý nghĩa nếu không có path nào khớp với các path đã khai báo trong routes 
  //thì mặc định sẽ chuyển hướng load LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
