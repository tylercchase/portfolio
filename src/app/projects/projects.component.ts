import { Component, OnInit,Input } from '@angular/core';
import { RawSource } from 'webpack-sources';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  @Input() projects = [
    {
      title:"Pilet",
      tags:['javascript',],
      content: `An OpenSource plug used for helping prevent your car from freezing in the -40 weather of Alaska. Built by me and a team of people at a hackathon at the University of Alaska Fairbanks.`,
    },
    {
      title:"Cool thang",
      tags:['typescript']
    }
  ];

  constructor() {
   }

  ngOnInit() {

  }

}
