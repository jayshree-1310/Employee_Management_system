<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import { CommonModule } from '@angular/common';
>>>>>>> 06c9de770bbd574861c0d0885ac940a7fc311e34

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [
    ReactiveFormsModule,  
    MatFormFieldModule, 
    MatInputModule, 
    CommonModule, 
    MatButtonModule
  ],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent implements OnInit{

  loginForm !: FormGroup;

  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: [''],
        password: new FormControl(''),
      })
  }

  check(){
    console.log(this.loginForm.value)
    if(this.loginForm.value.username === "admin@gmail.com" && this.loginForm.value.password ==="admin"){
      console.log("Login Successful");
    }
    else{
      console.log("Try again");
    }
    this.loginForm.reset();
  }

}
