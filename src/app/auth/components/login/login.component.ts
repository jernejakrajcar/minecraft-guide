import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    // }
  }

  onSubmit(f: NgForm) {

    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };

    this.authService.login(f.value).subscribe(loginObserver);
    console.log(f.value); //{ first: '', last: ''}
    console.log(f.valid); //false
    this.router.navigate(['/']);
  }

}
