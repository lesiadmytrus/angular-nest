import { Component, OnInit } from '@angular/core';
import { NestApiService } from '../nest-api.service';
import { Item } from '../item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-load-img',
  templateUrl: './load-img.component.html',
  styleUrls: ['./load-img.component.css']
})
export class LoadImgComponent implements OnInit {

  public items: Item[] = [];

  constructor(private nestService: NestApiService,private http: HttpClient) { }

  ngOnInit(): void {
    this.loadItem();
  }

  loadItem() {
    this.nestService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  addItem(item) {
    this.nestService.postItems(item).subscribe(() => {
      console.log('added');
    });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    this.nestService.uploadImage(file).subscribe(res => {
      console.log(res);
    });
  }
}
