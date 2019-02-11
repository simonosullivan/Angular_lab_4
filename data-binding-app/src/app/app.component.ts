import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  
  buttonCnt:number = 0;
  hidden: boolean = true;
  onClick(){
    this.buttonCnt++;
  }

  ifDoubleClick(){
    //this.hidden = false;
    if(this.hidden == true){
      this.hidden = false;
    }else{
      this.hidden = true;
    }
  }

}
