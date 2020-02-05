import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../models';
import {map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
    .append('Access-Control-Allow-Origin', '*')
    .append('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-Auth')
};

const apiUrl = 'http://localhost:3000/user';

export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) {
  }

  login(identifiant: User) {
    return this.http.post<User>(apiUrl + '/login', identifiant)
      .pipe(map(
        userData => {
          sessionStorage.setItem('email', identifiant.email);
          sessionStorage.setItem('role', identifiant.role);
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      ));
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('token');
  }

  register(identifiant: User) {
    return this.http.post<User>(apiUrl + '/signup', identifiant);
  }
}
