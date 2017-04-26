import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos  : any = [];


  constructor() { }

  ngOnInit() {
  	this.repos = [
  		{name: "Angulabner", description:"Proyecto de abner"},
  		{name: "Angular", description:"Un proyecto muy angular"},
  		{name: "app de escritorio", description:"Proyecto de escritorio muy generico"}
  	];
  }

}
