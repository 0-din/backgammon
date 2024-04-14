import { Component, importProvidersFrom } from '@angular/core';
import { Checker } from '../../model/checker.model';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [
  ],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  checkers: Checker[] = [];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  add(checker: Checker) {
    if(this.checkers.length === 0) {
      this.checkers.push(checker);
    }
    else if(this.checkers.length > 1 && this.checkers[this.checkers.length - 1].color === checker.color) {
      this.checkers.push(checker);
    }
    else if(this.checkers.length === 1 && this.checkers[0].color !== checker.color) {
      this.checkers[0] = checker;
      // add to the bar
    }
    else if(this.checkers.length > 1 && this.checkers[this.checkers.length - 1].color !== checker.color) {
      return;
    }
  }

  remove() {
    this.checkers.pop();
  }
}
