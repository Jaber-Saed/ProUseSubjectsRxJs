import { Component, OnInit } from '@angular/core';
import { DataServicService } from '../services/data-servic.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private DataServicService: DataServicService) {}

  ngOnInit(): void {
    this.DataServicService.dataEmitter.subscribe((value) => {
      this.inputText = value;
    });
  }

  inputText: string = '';
}
