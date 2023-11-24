import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor() {}
}
