import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-intro',
  templateUrl: './pagina-intro.component.html',
  styleUrls: ['./pagina-intro.component.css']
})
export class PaginaIntroComponent implements OnInit {

  constructor( private router:Router) {}

  goDashboard(){
    this.router.navigate(['/src/app/dashboard']);
  }

  ngOnInit(): void {
  }

}

