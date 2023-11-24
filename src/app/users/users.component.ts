import { Component, OnInit, inject } from '@angular/core';
import User from '../classes/user.class';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: Observable<any>;
  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog) {
    this.getUsers();
  }

  ngOnInit() {
    let user: User = new User();
  }

  openDialog() {
    this.dialog.open(AddUserComponent);
  }

  getUsers() {
    const collectionInstance = collection(this.firestore, 'users');
    this.users = collectionData(collectionInstance, { idField: 'id' });
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
