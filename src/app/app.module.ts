import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JurosComponent } from './juros/juros.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'juros', component: JurosComponent },
      { path: 'juros-composto', component: JurosCompostoComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    JurosComponent,
    JurosCompostoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
