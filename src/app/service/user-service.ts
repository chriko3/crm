import { Injectable, inject } from '@angular/core';
import { Database, ref, push, set, remove, onValue } from '@angular/fire/database';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private db: Database = inject(Database);

  addUser(user: User) {
    const usersRef = ref(this.db, 'users');
    return push(usersRef, { ...user });
  }

  getUsers(callback: (data: any) => void) {
    const usersRef = ref(this.db, 'users');
    onValue(usersRef, (snapshot) => {
      callback(snapshot.val());
    });
  }

  // User löschen
  deleteUser(id: string) {
    const userRef = ref(this.db, `users/${id}`);
    return remove(userRef);
  }
}