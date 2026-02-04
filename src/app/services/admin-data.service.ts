import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface AdminContent {
  youtubeUrl: string;
  contentText: string;
}

@Injectable({ providedIn: 'root' })
export class AdminDataService {
  private readonly COLLECTION = 'config';
  private readonly DOC_ID = 'content';

  constructor(private firestore: Firestore) {}

  getContent(): Observable<AdminContent | undefined> {
    const ref = doc(this.firestore, this.COLLECTION, this.DOC_ID);
    return docData(ref) as Observable<AdminContent | undefined>;
  }

  saveContent(data: AdminContent): Promise<void> {
    const ref = doc(this.firestore, this.COLLECTION, this.DOC_ID);
    return setDoc(ref, data);
  }
}
