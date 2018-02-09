import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  // title: any = 'Title';
  // subtitle: any = 'Sub-Title';
  // description: any = 'Description';
  // githubLink: any = 'Github link';
  // url: any = 'Url';
  // constructor() { }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  close(): void {
    this.dialogRef.close();
  }

  openWebsite() {
    window.open(this.data.url, "_blank");
  }

  openGithub() {
    var multiple = this.data.githubLink.split(';');
    console.log(multiple);
    window.open(multiple[0], "_blank");
    window.open(multiple[1], "_blank");
  }

}
