import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  OnInit,
  QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {fade, fadeInNav, navShow, newMsg} from "../../animations/animations";
import {Observable} from "rxjs";
import {interval} from "rxjs";
import {Scroll} from "@angular/router";
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {Answer} from "../model/answer";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    fadeInNav,
    navShow,
    newMsg
  ]
})
export class NavComponent implements OnInit, AfterViewInit {

  public showBranding: boolean = false;
  public posX: any;
  public click: boolean = false;

  public test: any;

  public showBackgroundNav: boolean = false;
  public showNav: boolean = false;

  public tabAnswer: Answer[] = [
    new Answer(["informations", "information"], " Je m'appelle Hermann"),
    new Answer(["bonjourhermann,c'estquoiça"], "Bonjour et bienvenue ! J'espère que tu vas bien ! Je me suis dit qu'à la place de te balancer à menu tout fade,\n" +
      "        pourquoi pas te laisser la possibilité de me demander ce que tu veux voir directement..."),
    new Answer(["bonjourhermann,c'estquoiça"], "Je t'avoue que je ne suis pas encore très intelligent mais ça viendra t'inquiète mais pour le moment je te prie de bien vouloir me demander ce que tu veux de manière simple avec des mots simple "),
    new Answer(["bonjourhermann,c'estquoiça"], "Exemple :"),
    new Answer(["bonjourhermann,c'estquoiça"], "<p>Si tu veux avoir des informations concernant ma scolarité écris : <span class='bold' > ta scolarité </span> ou <span class='bold' > tes formations</span></p> <p>Si tu veux avoir des informations concernant mes expérience professionnelle écris : <span class='bold' > tes expériences </span></p> <p>Si tu veux avoir des informations concernant mes projet écris : <span class='bold' > tes projets</span> </p> <p>Si tu veux m'envoyer un message écris : <span class='bold' > je veux te contacter </span> </p>" +
      ""),
    new Answer(["salut", "hey", "bonjour", "coucou", "wesh"], "Bonjour"),
    new Answer(["çava", "cava", "sava", "tuvasbien", "vousallezbien"], "Oui et vous ?"),
    new Answer(["commentçava", "commenttuvas", "commentallez-vous", "commentallezvous"], "Bien et vous ?"),
    new Answer(["trèsbienmerci"], "Super !"),
    new Answer(["test", "tests"], "lorem ipsum jes "),
  ]

  @HostListener('mousemove', ['$event'])
  event(event: MouseEvent){


  }

  public interval: any;
  public startChating: boolean = false;
  public showBubleChat: boolean = false;

  @ViewChild('answer')
  public input!: ElementRef

  @ViewChild('home_header')
  public elementView!: ElementRef

  @ViewChild('nav_btn')
  public navBtn!: ElementRef

  @ViewChild('box')
  public box!: ElementRef

  @ViewChild('chatBox')
  public chatBox!: ElementRef

  @ViewChild('chatBoxBg')
  public chatBoxBg!: ElementRef

  @HostListener('touchmove', ['$event'])
  eventTouch(event: TouchEvent){

  }

  constructor(private renderer: Renderer2) {

  }
  @HostListener("window:scroll", ['$event'])
  scrolling(){
    this.navMouv()

    console.log(this.elementView.nativeElement.style)

  }

  navMouv(){
    if(window.scrollY > 3){
      this.elementView.nativeElement.classList.add("navMouv")
      console.log(this.navBtn.nativeElement.src = "assets/nav-black.png")

    }else{
      this.elementView.nativeElement.classList.remove("navMouv")
      console.log(this.navBtn.nativeElement.src = "assets/nav.png")

    }
  }
  closeNav(){


    document.body.style.overflow = "scroll"
    this.chatBox.nativeElement.style.transform =  'scale(0, 1)'
    this.chatBoxBg.nativeElement.style.transform =  'scale(0, 1)'
    this.showBubleChat = true;
  }
  showNavProgress(){
    document.body.style.overflow = "hidden"
    this.chatBox.nativeElement.style.transform =  'scale(1, 1)'
    this.chatBoxBg.nativeElement.style.transform =  'scale(1, 1)'
    this.showBubleChat = false


  }

  showNavigation(){
    this.showBackgroundNav = true;
    this.showNav = true;
    this.startChating = true;
    document.body.style.overflow = "hidden"

    setTimeout(()=> {


      if(this.box.nativeElement.scrollHeight > this.box.nativeElement.offsetHeight)
        this.box.nativeElement.style.justifyContent = "initial"


      console.log(this.box.nativeElement)
      this.sendMsg("Bonjour Hermann, C'est quoi ça ?")

    }, 100)

  }
  sendMsg(value: string){

        let contentAll = this.renderer.createElement("div")
        contentAll.classList.add("contentBubleMsg")
        contentAll.classList.add("bubleRight")

        let profil = this.renderer.createElement("img")
        profil.src = "assets/profil.png";

        let nodeSend = this.renderer.createElement("div")
        nodeSend.classList.add("fadeIn")
        nodeSend.classList.add("content-msg")
        nodeSend.classList.add("send-msg")
        nodeSend.textContent = value

        this.renderer.appendChild(contentAll, nodeSend)
        this.renderer.appendChild(contentAll, profil)
        this.renderer.appendChild(this.box.nativeElement.children[0], contentAll)
        this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight


        value = value.replace(/ /g , '')
        value = value.replace("?" , '')

        const answer = this.tabAnswer.filter(function (e) {
          return e.keyword.includes(value.toLocaleLowerCase())
        })
        console.log(answer)
        if(answer.length > 0){
          let compt = 0
          this.interval = setInterval(() => {
            try{
              if(compt == answer.length)
                return
              // size msg
              this.box.nativeElement.children[0].style.position = "absolute"
              this.box.nativeElement.children[0].style.bottom = "0"
              this.box.nativeElement.children[0].style.paddingBottom = "47px"
              this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight


              let contentAll = this.renderer.createElement("div")
              contentAll.classList.add("contentBubleMsg")


              let profil = this.renderer.createElement("img")
              profil.src = "assets/humain.webp";

              let node = this.renderer.createElement("div")
              node.classList.add("fadeIn")
              node.classList.add("content-msg")
              node.classList.add("nav-msg")
              node.classList.add("intro")
              node.innerHTML = answer[compt].content

              this.renderer.appendChild(contentAll, profil)
              this.renderer.appendChild(contentAll, node)


              this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight

              this.box.nativeElement.children[0].children[0].style.opacity = 1;



              setTimeout(() => {

                this.renderer.appendChild(this.box.nativeElement.children[0], contentAll)

                this.box.nativeElement.children[0].children[0].style.opacity = 0;

                this.box.nativeElement.children[0].style.position = "relative"

                this.box.nativeElement.children[0].style.paddingBottom = 0
                this.box.nativeElement.children[0].style.marginTop = "auto"
                this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight



              }, 600)

              compt++
            }catch (e) {
              return
            }

          }, 1200)
        }else{
          setTimeout(() => {
            this.box.nativeElement.children[0].style.position = "absolute"
            this.box.nativeElement.children[0].style.bottom = "0"
            this.box.nativeElement.children[0].style.paddingBottom = "47px"
            this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight

            let node = this.renderer.createElement("div")
            node.classList.add("content-msg")
            node.classList.add("nav-msg")
            node.innerHTML = "Désolé, je n'ai pas compris"
            this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight
            this.box.nativeElement.children[0].children[0].style.opacity = 1;


            setTimeout(() => {
              this.renderer.appendChild(this.box.nativeElement.children[0], node)

              this.box.nativeElement.children[0].children[0].style.opacity = 0;

              this.box.nativeElement.children[0].style.position = "relative"

              this.box.nativeElement.children[0].style.paddingBottom = 0
              this.box.nativeElement.children[0].style.marginTop = "auto"
              this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight


            }, 600)
          }, 1200)
        }

        console.log(this.box.nativeElement.height)
        console.log(this.box.nativeElement.scrollTop)



        console.log("okx")
        if(this.box.nativeElement.scrollHeight > this.box.nativeElement.offsetHeight)
          this.box.nativeElement.style.justifyContent = "flex-start"

        this.input.nativeElement.value = '';

  }

  ngAfterViewInit(): void {



  }



  ngOnInit(): void {
      this.showBranding = true;
  }


  yu(){
    console.log("ouas")
  }


}
