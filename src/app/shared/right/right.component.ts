import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { BuilderService } from '../builder.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  constructor(public Resolve: BuilderService) {

  }

  ngOnInit() {
  }

  send(message: string) {
    this.Resolve.Inj<LoggerService>(LoggerService).log(message);
  }

}
