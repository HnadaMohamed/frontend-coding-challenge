import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Repository } from 'src/app/models/repository';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})

export class RepositoryListComponent implements OnInit {

  // Repositoty list
  reposList: Array<Repository> = new Array<Repository>();
  // Index of the page
  pageIndex = 0;
  searchText = '';

  constructor(private githubService: GithubServiceService) {}


  ngOnInit(): void {
    // Get the first page
    this.onScroll();
  }


  /**
   * Get the data from Github API
   */
  getreposList(next: number){
    this.githubService.getMostStarredGitRepos(next).subscribe( (data: any) => {
      data.items.forEach(repo => {
        let desc ;
        // checking if the repo description is too long
        if (repo.description){
          desc =  (repo.description && (repo.description).length <= 100 ) ? repo.description : (repo.description).substring(0, 100) + '...';
        }
        this.reposList.push(
          new Repository (
            repo.owner.avatar_url,
            repo.name, desc,
            repo.stargazers_count,
            repo.open_issues,
            // Calculate the time interval
            moment().diff( repo.created_at , 'days' )
          )
        );
      });
    });
  }


  /**
   * Get the next page when the scroll reach the buttom of the page
   */
  onScroll(){
    this.getreposList(++this.pageIndex);
  }







}
