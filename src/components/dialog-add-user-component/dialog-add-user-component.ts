import { Component } from '@angular/core';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user-component',
  imports: [
    MatDialogContent,
    MatFormFieldModule,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelect,
    MatOption,
    FormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user-component.html',
  styleUrl: './dialog-add-user-component.scss',
})
export class DialogAddUserComponent {
  user = new User();

  saveUser(){
    console.log(this.user);
  }
}
