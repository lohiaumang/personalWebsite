import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatSidenav, MatIconModule, MatGridListModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FirstPageComponent } from './first-page/first-page.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    FooterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
