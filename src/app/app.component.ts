import { Component } from '@angular/core';
import { DoneModel } from './models/doneModel';
import { UnDoneModel } from './models/UnDoneModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyToDo-App';
  doneModels: DoneModel[] = []
  UnDoneModels: UnDoneModel[] =[]
  unDoneInput:string =""

  addDoneInput(){
    let unDoneModel = new UnDoneModel()
    unDoneModel.title = this.unDoneInput;
    unDoneModel.date = Date()
    this.UnDoneModels.push(unDoneModel)
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
