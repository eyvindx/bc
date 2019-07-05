# BuroCredito

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
npm install ng-multiselect-dropdown
en app-module
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import:[
NgMultiSelectDropDownModule.forRoot()
]





import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent{
  userSelectsString = '';
  valor = '50';
  fecha = '12-12-2019';
  userSelects = [];
   suggestions = [{"id":"001","valor": this.valor, "fecha": this.fecha},{"id":"002","valor": this.valor, "fecha": this.fecha}];

  show: boolean = false;

  suggest() {
    this.show = true;
  }

  isSelected(s:any) {
   return this.userSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
  }

  // selectSuggestion(s) {
  //   if(this.userSelects.indexOf(s) > -1){
  //      this.userSelects = this.userSelects.replace(s,'');
  //   } else {
  //      this.userSelects += ' '+s;
  // }
  //   this.userSelects = this.userSelects.replace(/^\s*/,'');//.trim();
  //   this.deleteInvalidSelects();
  //   this.show = false;
  // }

  selectSuggestion(s) {
    this.userSelects.find((item) => item.id === s.id) ? 
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id) :
    this.userSelects.push(s);
    // this.assignToNgModel();
  }

  // deleteInvalidSelects() {
  //  for(var user of this.invalidUsers){
  //     if(this.userSelects.indexOf(user) > -1){
  //        this.userSelects = this.userSelects.replace(user, ' ');
  //     }
  //   }
  // }

  deleteSelects(s) {
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id);
    // this.assignToNgModel();
  }

  assignToNgModel() {
    this.userSelectsString = '';
    this.userSelects.map((item) => this.userSelectsString += item.valor + ' ');
  }
};

html



<div class="autocomplete">
    <div class="chips-input-container">
        <div class="user-chip" *ngFor="let user of userSelects">
            {{user.id}} - {{user.valor}} - {{user.fecha}}
            <span (click)="deleteSelects(user)" class="delete-icon-chip">&#10006;</span>
        </div>

        <input name="suggestion" type="text" placeholder="Agregar ingreso economico" (click)="suggest()" [(ngModel)]="userSelectsString">
    </div>

    <div class="autocomplete-items" *ngIf="show">
        <div *ngFor="let s of suggestions" [ngClass]="isSelected(s) ? 'selected-suggestion' : ''" (click)="selectSuggestion(s)"> {{s.id}} valor:<input type="text" name="valor" [(ngModel)]="valor"> fecha:<input type="text" name="fecha" [(ngModel)]="fecha"></div>
    </div>
</div>
