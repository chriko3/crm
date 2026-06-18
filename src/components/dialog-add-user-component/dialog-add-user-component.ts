import { Component } from '@angular/core';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-add-user-component',
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatButtonModule],
  templateUrl: './dialog-add-user-component.html',
  styleUrl: './dialog-add-user-component.scss',
})
export class DialogAddUserComponent {}
