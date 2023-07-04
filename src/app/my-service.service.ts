import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  toDo(message: string) {
    console.log(message);
  }
}
