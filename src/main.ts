import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ExampleComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
      </a>
    <app-example></app-example>
    <div>
      <ng-container *ngTemplateOutlet="cell;context:{datax: data}">
      </ng-container>
    </div>

    <ng-template #cell let-objx="datax">
      Value main template {{ objx | json }} 
      <ng-container *ngTemplateOutlet="objx.f ? normal: elseFoo;context:{datax:data}">
      </ng-container>
    </ng-template>

    <ng-template #normal let-objx="datax">
        Condition True: {{objx.name}}
    </ng-template>
    
    <ng-template #elseFoo let-objx="datax"> 
      <div style="background: red"> 
        <br /> 
        Condition is false {{objx.name}} {{ objx.f}}
      </div>
    </ng-template>
  `,
})
export class App {
  name = 'Angular';
  data = {
    name: 'Hello my friends',
    f: false,
  };

  constructor() {}

  ngAfterViewInit() {}
}

bootstrapApplication(App);
