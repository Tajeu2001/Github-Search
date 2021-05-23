import { Component, OnInit } from '@angular/core';
import { GithubRequestService} from '../github-http/github-request.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'


@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {

  user!: User;
  repoInfo=[]
  githubRequestService!: GithubRequestService;

  constructor(githubRequestService: GithubRequestService) { 
    this.githubRequestService = githubRequestService;

  }

  ngOnInit(): void {
    this.user= this.githubRequestService.user;
    this.repoInfo= this.githubRequestService.repoData;
  }


}
