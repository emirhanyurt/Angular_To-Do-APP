import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/UnDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {
  @Input() UnDoneModels:UnDoneModel[]
  @Input() doneModels:DoneModel[]
  constructor() { }

  ngOnInit(): void {
  }
  complete(doneModel:any)
  {
    this.doneModels.push(doneModel)
    let index =this.UnDoneModels.indexOf(doneModel);
    this.UnDoneModels.splice(index,1)
  }
  changeDone(doneModel:any)
  {
    this.UnDoneModels.push(doneModel)
    let index =this.doneModels.indexOf(doneModel);
    this.doneModels.splice(index,1)
  }
  deleteUnDone(doneModel:any)
  {
    let index =this.UnDoneModels.indexOf(doneModel);
    this.UnDoneModels.splice(index,1)
  }
}
