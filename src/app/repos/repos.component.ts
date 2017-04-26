import { Component, OnInit } from '@angular/core';
import { ReposService} from './repos.service';




@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {

  repos  : any = [];
  loading : boolean = true;
  selectedRepo : IRepo = {name:"",description:""};
  newRepo : IRepo = {
    name:"",
    description: ""
  }

  //inyeccion de dependencias del servicio creado
  constructor(private reposService : ReposService) { }
  ngOnInit() {
    this.reposService.getRepos().subscribe((data)=>{
      this.repos = data.json();
      this.selectedRepo = this.repos[0];
      this.loading=false;
    });



    /*
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
  	},500);*/
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
