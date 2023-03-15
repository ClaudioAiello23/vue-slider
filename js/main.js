'use strict';

/*Salvare in una variabile locale la funzione createApp, presa
dalla variabile globale Vue; createApp è come un valore
destrutturato di Vue*/
const { createApp } = Vue;

/*Inizializzare un'istanza dell'applicazione Vue, invocando 
la funzione createApp; aggiungo un Array di oggetti*/
const app = createApp({
    data() {
        return {
            selectedImg: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },

    methods: {
        prevSlide () {
            this.selectedImg --;
            if (this.selectedImg < 0){
                this.selectedImg = this.slides.length -1;
            }            
        },
        nextSlide() {
            this.selectedImg ++;
            if (this.selectedImg > this.slides.length -1){
                this.selectedImg = 0;
            }
        },
        /*Funzione che cerca la posizione dell'img selezionata; applicata al
        click su una mini ImageBitmapRenderingContext(thumb) per far apparire
        la corrispondente immagine grande*/
        selectedThumb (position) {
            this.selectedImg = position;
        },
    },
    mounted(){
        setInterval(() => {
          this.selectedImg ++;
          if (this.selectedImg > this.slides.length -1){
               this.selectedImg = 0;
            }
        }, 3000);
    }
    
}).mount('#app') //  invocare il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app.



