import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  url: string;
 
}

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ZoomComponent>,
    @Inject (MAT_DIALOG_DATA) public data:DialogData
  ) { }

  ngOnInit(): void {
    console.log(this.dialogRef);
  }

}
