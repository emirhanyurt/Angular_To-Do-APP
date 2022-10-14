import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/UnDoneModel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
   @Input() doneModels:DoneModel[]
   @Input() UnDoneModels:UnDoneModel[]
  constructor() { }

  ngOnInit(): void {
  }
  changeDone(doneModel:any)
  {
    this.UnDoneModels.push(doneModel)
    let index =this.doneModels.indexOf(doneModel);
    this.doneModels.splice(index,1)
  }
}
