// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {BillService} from "../services/bill.service";

// @ts-ignore
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  model: any = {};
  bill: any = {};

  constructor(private billService: BillService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.billService.getBill(this.model.billId).subscribe((data: any) => {
      this.bill = data;
      console.log(this.bill);
    }, (error: any) => {
      console.log(error);
    });
  }
}
