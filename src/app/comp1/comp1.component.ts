import { Component, OnInit } from '@angular/core';
import { DataServicService } from '../services/data-servic.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private DataServicService: DataServicService) {}

  ngOnInit(): void {}

  enterText: string = '';

  OnButtonClick() {
    // console.warn(this.enterText);
    this.DataServicService.raisData(this.enterText);
  }
}
