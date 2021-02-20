import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    const registerObserver = {
      next: x => console.log("New user created"),
      error: err => console.log(err)
    };
    this.authService.register(f.value).subscribe(registerObserver);
    console.log(f.value); //{ first: '', last: ''}
    console.log(f.valid); //false
    this.router.navigate(['/login']);
  }

}
