import { Component, OnInit, Input } from '@angular/core';
import { developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  
  public Developer = new developer("Arthur", "Jouanneau", 25, "Homme", "Futur developpeur", [
    new Skill ("HTML", "img", "html5.com" ),
    new Skill ("CSS", "img", "CSS.com" )
    
  ]);


  constructor() {}

  ngOnInit() {
  }

}
