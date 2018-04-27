import { Component, OnInit} from '@angular/core';
import { LoggerService } from '../logger.service';
import { BuilderService } from '../builder.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  constructor(public Resolve: BuilderService) {

  }

  ngOnInit() {
  }

  send(message: string) {
    this.Resolve.Inj<LoggerService>(LoggerService).log(message);
  }
}
