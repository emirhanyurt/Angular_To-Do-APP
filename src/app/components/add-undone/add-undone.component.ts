import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UnDoneModel } from 'src/app/models/UnDoneModel';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss']
})
export class AddUndoneComponent implements OnInit {
  @Input() UnDoneModels:UnDoneModel[]
  @ViewChild("DoneInput") addInput:ElementRef
  constructor() { }
  
  ngOnInit(): void {
  }
  addDoneInput(addInput:HTMLInputElement){
   console.log(this.addInput.nativeElement.value);

    let unDoneModel = new UnDoneModel()
    unDoneModel.title = addInput.value
    unDoneModel.date = Date()
    this.UnDoneModels.push(unDoneModel)
  }
}
