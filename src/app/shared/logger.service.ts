import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  firstMessage: string;
  constructor() {
    console.warn('The Logger is now injected!');
  }

  log(message: string) {
    if (!this.firstMessage) {
      this.firstMessage = message;
    }
    console.log('[' + this.firstMessage + ']:' + message);
  }

}
