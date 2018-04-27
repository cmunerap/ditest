import { Injectable, Injector } from '@angular/core';

@Injectable()
export class BuilderService {

  constructor(public injector: Injector) { }

  Inj<T>(T): T {
    return this.injector.get(T);
  }
}
