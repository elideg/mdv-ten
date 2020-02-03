import { ProjectService, Project } from '@mdv-ten/core-data';
import { tap } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-ten-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  _project;

  public get project() {
    return this._project
  }

  public set project(value) {
    this._project = value
  }

  originalTitle;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectService
  ) { }

  ngOnInit() {
    const projectId = this.route.snapshot.params && this.route.snapshot.params.id;
    this._project = this.projectsService.findOne(projectId);
    this._project.pipe(
      tap((project: Project) => this.project.title = this.originalTitle)
    ).subscribe()
  }

}
