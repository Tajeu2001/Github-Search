import { Component, OnInit } from '@angular/core';
import { GithubRequestService} from '../github-http/github-request.service';
import { User } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  username!:string;
  user!:User;
  githubRequestService!:GithubRequestService
  

  submitUsername(){
    this.githubRequestService.getUser(this.username);
  }

  constructor(githubRequestService: GithubRequestService) { 
    this.githubRequestService = githubRequestService;

  }


  ngOnInit(): void {
  }

}
