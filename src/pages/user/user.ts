import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../../components/dialog-add-user-component/dialog-add-user-component';

@Component({
  selector: 'app-user',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
