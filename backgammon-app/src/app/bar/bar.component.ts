import { Component } from '@angular/core';
import { Checker, Color } from '../../model/checker.model';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  blackCheckers: Checker[] = [];
  whiteCheckers: Checker[] = [];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  add(checker: Checker) {
    if(checker.color === Color.Black) {
      this.blackCheckers.push(checker)
    }
    else if(checker.color === Color.White) {
      this.blackCheckers.push(checker)
    }
  }
}
