import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './app-header/app-header.component';
import { InstallerTrainComponent } from './installer-train/installer-train.component';
import { ServiceFiddlerComponent } from './service-fiddler/service-fiddler.component';


@NgModule({
   declarations: [
      AppComponent,
      AppHeaderComponent,
      InstallerTrainComponent,
      ServiceFiddlerComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatExpansionModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
      MatStepperModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
