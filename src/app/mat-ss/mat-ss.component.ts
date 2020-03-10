import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-mat-ss',
  templateUrl: './mat-ss.component.html',
  styleUrls: ['./mat-ss.component.css']
})
export class MatSsComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
