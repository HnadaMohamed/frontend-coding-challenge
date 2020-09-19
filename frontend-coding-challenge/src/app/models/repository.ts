export class Repository{

  constructor(
    public ownerAvatar: string ,
    public repoName: string ,
    public repoDescription: string ,
    public nbStars: number ,
    public nbIssues: number,
    public timeInterval: string
  ) {}

}
