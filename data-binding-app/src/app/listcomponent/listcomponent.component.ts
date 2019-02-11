import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {

  presidents:object[] = [{name:"Higgins", term:"2011 - "},
  {name:"McAleese", term:"1997 - 2011"},
  {name:"Robinson", term:"1990 - 1997"},
  {name:"Hillery", term:"1976 - 1990"}];

  constructor() {
    this.presidents.push({name:"O Dalaigh", term:"1974 - 1976"});
   }
  
  
  ngOnInit() {
  }

}
