import {Directive, HostListener, ElementRef, AfterViewInit} from "@angular/core";
import {Scroll} from "@angular/router";

@Directive({
  selector: '[scrollx]'
})
export class ScrollDirective implements AfterViewInit{
  public number: number = 400

  public actuallyScroll: any;
  public showingElement: boolean = false;


  constructor(private elementView: ElementRef) {

  }

  @HostListener("window:scroll", ['$event'])
  scrolling(){
    if(window.scrollY > this.elementView.nativeElement.offsetTop - this.elementView.nativeElement.offsetHeight)
      this.display();
    else
      this.notDisplay();

  }
  @HostListener("click")
  click(){

    console.log("je click")

  }

  display(){
    if(this.showingElement){
      this.elementView.nativeElement.classList.add('show');
    }
    this.showingElement = true
  }
  notDisplay(){
    this.showingElement = false;
    this.elementView.nativeElement.classList.remove('show');

  }
  easing(el: any): any{
    if(el.nativeElement.scrollLeft == 0)
      return null

    if(el.nativeElement.scrollLeft < 100){
      el.nativeElement.scrollTo({
        left: 0,
        behavior: "smooth"
      })
    }

  }


  get p2() {


    return null


  }

  convert(valueOld: number, valueNew: number){

    let val = "50%"
  }

  ngAfterViewInit(): void {
    this.display()




  }

}
