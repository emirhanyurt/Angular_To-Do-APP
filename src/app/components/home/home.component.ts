import { Component, OnInit } from '@angular/core';
import { DoneModel } from '../.././models/doneModel';
import { UnDoneModel } from '../.././models/UnDoneModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  doneModels: DoneModel[] = []
  UnDoneModels: UnDoneModel[] =[]

  constructor() { }

  ngOnInit(): void {
  }
 
}
