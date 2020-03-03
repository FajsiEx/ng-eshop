import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  data: any = [];

  constructor(private api: ApiService) {
    this.fetchData();
  }

  ngOnInit() {
  }

  fetchData() {
    this.api.getProducts().subscribe(data => {
      this.data = data["slice"](0, 10);
    })
  }

}
