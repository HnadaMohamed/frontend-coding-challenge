import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable({ providedIn: 'root' })
export class GithubServiceService {

  private githubApi = 'https://api.github.com/search/repositories?q=created:>2020-08-15&sort=stars&order=desc';

  constructor(private http: HttpClient) { }

  /**
   * This function get the most starred Github repos created in the last 30 days
   */
  public getMostStarredGitRepos(next: any): Observable <any> {
    return this.http.get(this.githubApi, { params: { page: next } });
  }
}
