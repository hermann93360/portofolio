import {AfterViewInit, Component, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {fade, fadeAnimation, upAnimation} from "../animations/animations";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    upAnimation,
    fadeAnimation
  ]
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'portofolio';

  public titlee: string = 'Developpeur';

  public showAbout: boolean = false;

  public showPage: boolean = false;

  loading = true;

  @ViewChild('home')
  public home!: ElementRef


  constructor() {

  }

  ngAfterViewInit(): void {
    setInterval(() => {
      if(this.titlee === 'Developpeur')
        this.titlee = 'Full -stack'
      else
        this.titlee = 'Developpeur'
    }, 3000)
  }

  ngOnInit(): void {
    this.loading = false;

    this.showAbout = true;
      setTimeout(() => {
        this.showPage = true;
      }, 500)
  }
  down(){
    window.scrollTo({
      top: this.home.nativeElement.offsetHeight,
    })
  }

  mousedown(){
    console.log("c")
  }
}
