import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerService } from './shared/logger.service';
import { LeftComponent } from './shared/left/left.component';
import { RightComponent } from './shared/right/right.component';
import { BuilderService } from './shared/builder.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService, BuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
