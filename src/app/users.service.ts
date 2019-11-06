import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get('user.json').pipe(map(data => {
      let usersList = data["userList"];

      return usersList.map((user: any) => ({
        name: user.userName,
        age: user.userAge,
      }));
    }));
  }
}