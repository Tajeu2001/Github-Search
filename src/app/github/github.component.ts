import { Component, OnInit } from '@angular/core';
import { GithubRequestService} from '../github-http/github-request.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {
  user!:User;
  myUsername!: "Tajeu2001";
  repoInfo=[];
  githubRequestService!: GithubRequestService;

  constructor(githubRequestService: GithubRequestService) { 
    this.githubRequestService = githubRequestService;

  }
  ngOnInit(): void {
    this.repoInfo= this.githubRequestService.repoData;
  }

}
