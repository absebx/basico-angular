import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos  : any = [];
  loading : boolean = true;


  constructor() { }

  ngOnInit() {

  	setTimeout(()=>{
  		this.repos = [
  		{name: "Angulabner", description:"Proyecto de abner"},
  		{name: "Angular", description:"Un proyecto muy angular"},
  		{name: "app de escritorio", description:"Proyecto de escritorio muy generico"}
  	];
  	this.loading=false;
  	},3000);
  }

}
