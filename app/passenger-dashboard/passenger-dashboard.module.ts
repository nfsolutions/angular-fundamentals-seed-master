import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

// containers
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";
// components
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
// services
import {PassengerDashboardService} from "./containers/passenger-dashboard/passenger-dashboard.service";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";

@NgModule({
  declarations: [
    // container component
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // generic components
    PassengerCountComponent,
    PassengerFormComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule, HttpModule, FormsModule],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService]
})

export class PassengerDashboardModule {
}
