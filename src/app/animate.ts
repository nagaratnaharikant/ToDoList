import { trigger, style, transition, animate } from '@angular/animations';

export let slide = trigger('slide', [
    transition('void => *', [
        style({ transform: 'translateY(-20px)'}),
        animate(500)
    ]),

    transition('* => void', [
        animate(500, style({ transform: 'translateX(-100%)'}))
    ])

]);
