import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname">
      </div>
      <div>
        Passenger id:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            [value]="true"
            (ngModelChange)="toggleCheckIn($event)"
          >
        </label>
        Yes 
      </div>
      <div>
        <label>
          <input 
            type="radio" 
            name="checkedIn" 
            [ngModel]="detail?.checkedIn" 
            [value]="false"
            (ngModelChange)="toggleCheckIn($event)"
          >
        </label>
        No
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in Date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        >
      </div>
      
      {{form.value | json }}
    </form>
  `
})

export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }

  }
}
