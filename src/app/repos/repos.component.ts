import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {

  repos  : any = [];
  loading : boolean = true;
  selectedRepo : IRepo;
  newRepo : IRepo = {
    name:"",
    description: ""
  }

  constructor() { }
  ngOnInit() {
  	this.selectedRepo = {
  		name : "Angulabner", 
  		description : "Proyecto de abner"
  	}
  	setTimeout(()=>{
  		this.repos = [
  		{name: "Angulabner", description:"Proyecto de abner"},
  		{name: "Angular", description:"Un proyecto muy angular"},
  		{name: "app de escritorio", description:"Proyecto de escritorio muy generico"}
  	];
  	this.loading=false;
  	},500);
  }

  setRepo(repo){
  	this.selectedRepo = repo; 
  }

  addNewRepo(){
    this.repos.unshift(this.newRepo);
    this.newRepo = {
      name: "",
      description: ""
    }
  }

}

export interface IRepo{
	name : string,
	description : string
}
