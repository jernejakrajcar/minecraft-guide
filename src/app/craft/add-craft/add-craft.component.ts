import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { CraftService } from './../services/craft.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-craft',
  templateUrl: './add-craft.component.html',
  styleUrls: ['./add-craft.component.scss']
})
export class AddCraftComponent implements OnInit {

  craftForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private craftService: CraftService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.title.next('Add Crafts');
  }

  addCraft() {
    if (this.craftForm.valid) {
      this.craftService.addCraft(this.craftForm.value)
        .subscribe(res => {
          this.craftForm.reset();
          this.router.navigate(['/']);
        });
    }
  }

}
