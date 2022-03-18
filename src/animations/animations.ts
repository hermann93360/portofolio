import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const routeAuthHouseAnimamtion = trigger('routeAnimations', [
  transition('register => connect', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: 1, left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1, left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ]),

  transition('connect => register', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: 1, right: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, right: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1, right: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const upAnimation = trigger('up', [
  transition(':enter', [
        query(":self",[
          style({
            marginTop: '300px',
            opacity: 0
          }),
          animate('450ms cubic-bezier(.65,.3,.24,1.64)', style({
            marginTop: '0px',
            opacity: 1,
          })),
        ]),
  ]),
])

export const fade = trigger('fade', [
  transition(':enter', [
    query(":self",[
      style({
        marginTop: '-100px',
        opacity: 0
      }),
      animate('450ms cubic-bezier(.65,.3,.24,1.64)', style({
        marginTop: '0px',
        opacity: 1,
      })),
    ]),
  ]),
])

export const fadeInNav = trigger('fadeInNav', [
  transition(':enter', [
    query(":self",[
      style({
        opacity: 0
      }),
      animate('450ms ease', style({
        opacity: 0.9
      })),
    ]),
  ]),
  transition(':leave', [
    query(":self",[
      style({
        opacity: 0.9
      }),
      animate('450ms ease', style({
        opacity: 0
      })),
    ]),
  ]),
])

export const newMsg = trigger('newMsg', [

])

export const navShow = trigger('navShow', [
  transition(':enter', [

    query(":self",[
      style({
        transform: 'scale(0, 1)'
      }),
      animate('450ms cubic-bezier(.17,.67,.53,.89)', style({
        transform: 'scale(1, 1)'
      })),
    ]),
/*
    query(".navigation__chat .navigation__chat--body .messages .wait",[
        animate('1000ms cubic-bezier(.17,.67,.53,.89)', style({
          opacity: 1
        }))
    ]),

      query(".navigation__chat .navigation__chat--body .messages .wait",[
        animate('300ms cubic-bezier(.17,.67,.53,.89)', style({
          opacity: 0
        })),
      ]),
*/
  ]),
  /*
  transition(':leave', [

    query(":self",[
      style({
        transform: 'scale(1, 1)'

      }),
      animate('450ms cubic-bezier(.17,.67,.53,.89)', style({
        transform: 'scale(0, 1)'

      })),
    ]),

        query(".navigation__chat .navigation__chat--body .messages .wait",[
            animate('1000ms cubic-bezier(.17,.67,.53,.89)', style({
              opacity: 1
            }))
        ]),

          query(".navigation__chat .navigation__chat--body .messages .wait",[
            animate('300ms cubic-bezier(.17,.67,.53,.89)', style({
              opacity: 0
            })),
          ]),

  ]),

     */

])

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':leave', [
    query(":self",[
      style({
        opacity: 1
      }),
      animate('450ms cubic-bezier(.65,.3,.24,1.64)', style({
        opacity: 0,
      })),
    ]),
  ]),
])
