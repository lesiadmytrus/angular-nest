import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model'

@Injectable({ providedIn: 'root' })
export class NestApiService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items');
  }

  public postItems(item: Item): Observable<Item> {
    return this.http.post<Item>('/api/items', item);
  }

  public uploadImage(image: File): Observable<Item> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<Item>('/api/items', formData);
  }
}
