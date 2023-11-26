import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  constructor(private router: Router){

  }
  
  ngOnInit(): void {

  }

  employeeLogin(){
    this.router.navigate(['/employeeLogin']);
  }
  managerLogin(){
    this.router.navigate(['/managerLogin']);
  }

  navigateToHome(){
    console.log("home Component ");
    
    this.router.navigate(['/home'])
  }

}
