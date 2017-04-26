import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ReposService {
	baseUrl:string = "https://api.github.com/users/";
	userName:string = "asder707";
  	constructor(private http:Http) { }
  	getRepos(){
  		return this.http.get(this.baseUrl+this.userName+"/repos");
  	}

}
