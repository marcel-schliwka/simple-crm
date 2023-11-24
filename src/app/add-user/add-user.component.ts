import { Component, OnInit, inject } from '@angular/core';
import User from '../classes/user.class';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  item$: any;

  user: User = new User();
  birthDate: Date = new Date();

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection);
    console.log(this.item$);
    this.getUsers();
  }

  ngOnInit(): void {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is:', this.user);
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, this.user.toJSON())
      .then((result) => {
        console.log('Saved', result);
      })
      .catch((err) => {
        console.log('Error while saving', err);
      });
  }

  getUsers() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe((val) => {
      console.log(val);
    });
  }
}
