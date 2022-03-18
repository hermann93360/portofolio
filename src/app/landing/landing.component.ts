import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fadeAnimation, upAnimation} from "../../animations/animations";
import {ViewportScroller} from "@angular/common";
import {NavComponent} from "../nav/nav.component";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    upAnimation,
    fadeAnimation
  ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  public titlee: string = 'Developpeur';

  public showAbout: boolean = false;

  public showPage: boolean = false;

  progressAnimation = false;

  @ViewChild(NavComponent)
  componentNav!: NavComponent;

  @ViewChild('home')
  public home!: ElementRef


  constructor(private viewportScroller: ViewportScroller) { }

  ngAfterViewInit(): void {
    setInterval(() => {
      if(this.titlee === 'Developpeur')
        this.titlee = 'Full -stack'
      else
        this.titlee = 'Developpeur'
    }, 3000)
  }

  ngOnInit(): void {
    this.showAbout = true;
    setTimeout(() => {
      this.showPage = true;
    }, 500)
  }
  down(elementId: string){
    this.viewportScroller.scrollToAnchor((elementId))
    /*
    window.scrollTo({
      top: this.home.nativeElement.offsetHeight,
    })
     */
  }

  mousedown(){
    console.log("c")
  }

  displayChat(){
    this.progressAnimation = true
    if(!this.componentNav.startChating)
      this.componentNav.showNavigation();
    else
      this.componentNav.showNavProgress()
  }

}
