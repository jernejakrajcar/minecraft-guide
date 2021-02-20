import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const resetPassObserver = {
      next: x => console.log('Changed password'),
      error: err => console.log(err)
    };
    this.authService.resetPassword(f.value).subscribe(resetPassObserver);
    console.log(f.value); //{ first: '', last: ''}
    console.log(f.valid); //false
  }

}
