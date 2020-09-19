import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})

export class RepositoryListComponent implements OnInit {

  reposList: Array<Repository> = new Array<Repository>();

  constructor(private githubService: GithubServiceService) {

  }

  ngOnInit(): void {
    this.getreposList(0);
  }

  getreposList(next: number){
    this.githubService.getMostStarredGitRepos(next).subscribe( (data: any) => {
      this.reposList.length = 0;
      data.items.forEach(repo => {
        this.reposList.push(
          new Repository (
            repo.owner.avatar_url,
            repo.name, repo.description,
            repo.stargazers_count,
            repo.open_issues,
            repo.created_at
          )
        );
      });
    });

  }
}
