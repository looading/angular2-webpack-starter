import { Component, ViewChild, ElementRef } from '@angular/core';
import { SEMANTIC_COMPONENTS } from "ng-semantic";
import { FormGroup, FormBuilder } from "@angular/forms";

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge,
    SEMANTIC_COMPONENTS
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = { value: '' };

  form: FormGroup;
  @ViewChild("formEl") formEl: ElementRef;

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, public fb: FormBuilder) {
    this.form = fb.group({
      "value": [""]
    })
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.formEl.nativeElement.reset();
  }

}
