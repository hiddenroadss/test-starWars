import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  constructor() {}

  poof(params: string): void {
    console.log(params);
  }
}
