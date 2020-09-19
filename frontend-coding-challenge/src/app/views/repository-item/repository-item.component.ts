import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repoItem: Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
