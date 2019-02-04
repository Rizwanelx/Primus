import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import { AgmCoreModule } from '@agm/core';




import { AppComponent } from './app.component';
import { AutomationServicesComponent } from './componenet/services/automation-services/automation-services.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componenet/home/home.component';
import { FooterComponent } from './componenet/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomationServicesComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule,NgbModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    AngularStickyThingsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuIQAz5WZWUxvwd8GuIuWE_wcAIhnPpRU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
