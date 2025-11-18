import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>) { }

  isToggled = false;

  ngOnInit(): void {
  }

  onSave(): void {
    console.log('Save clicked');
    console.log('Toggle state:', this.isToggled);
    this.dialogRef.close();
  }
 

}
