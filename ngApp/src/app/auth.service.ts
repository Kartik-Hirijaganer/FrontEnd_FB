import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://7uc69ca920.execute-api.us-west-2.amazonaws.com/production/user/signUp";
  private _loginUrl = "https://7uc69ca920.execute-api.us-west-2.amazonaws.com/production/user/login";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/mainHome']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
