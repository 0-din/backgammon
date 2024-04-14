import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    ColumnComponent,
    CommonModule,
    BarComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  Columns: [] = [];

  constructor() {}

  ngOnInit(): void {

  }

}
