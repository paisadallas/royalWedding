import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }
  dataEs =[
    {
    title:'Basico',
    image: '../../../../assets/images/1.jpg',
    services:[
        {
          name:'• 1 Fotógrafo + 1 Videógrafo. (2 camaras para video + Drone)'
        },
        {
          name:"• Cobertura de 5 horas."
        },
        {
          name:"• Fotos ilimitadas el día del evento."
        },
        {
          name:"• Video cinematografico ilimitado el día del evento."
        },
        {
          name:"• Video principal editado del evento."
        },
        {
          name:"• Video social media (2 minutos)."
        },
        {
          name:"• Fotos y video del evento en USB."
        },
        {
          name:"• Sesión de fotos para foto principal. (Al aire libre o en estudio.)"
        },
        {
          name:"• Foto principal de 20x30 imprenta."
        },
        {
          name:"• Marco para foto principal 20x30."
        },
        {
          name:"• 100 fogrotrafias impresas 6x4."
        },
        {
          name:"• Slideshow de fotos."
        },
      ], 
    price:'$2500'
    },
    {
    title:'Supremo',
    image: '../../../../assets/images/23.jpg',
    services:[
        {
          name:'• 1 Fotógrafo + 2 Videógrafo.(3 camaras de video + Drone)'
        },
        {
          name:"• cobertura de 8 horas."
        },
        {
          name:"• Casa + Iglesia + Salón.(3 locaciones)"
        },        
        {
          name:"• Fotos ilimitadas el día del evento."
        },
        {
          name:"• Video cinematografico ilimitado el día del evento."
        },
        {
          name:"• Video social media (3 minutos)."
        },
        {
          name:"• Fotos y video del evento en caja USB personalizada."
        },        
        {
          name:"• Sesión de fotos para foto principal. (Al aire libre o en estudio.)"
        },
        {
          name:"• Album 10x10"
        },
        {
          name:"• Foto principal de 24x36 imprenta."
        },
        {
          name:"• Marco para foto principal 24x36."
        },        
        {
          name:"• 200 fogrotrafias impresas 6x4."
        },
        {
          name:"• Slideshow de fotos."
        },
      ],
    price:'$3700'
    },

    {
      title:'VIP',
      image: '../../../../assets/images/26.jpg',
      services:[
          {
            name:'• 2 Fotógrafo + 2 Videógrafo + 1 Drone '
          },
          {
            name:"• Cobertura de 12 horas.(4 locaciones)"
          },
          {
            name:"• Casa + Iglesia + Parque + Salón "
          },
          {
            name:'• Fotos ilimitadas el día del evento'
          },
          {
            name:"• Video cinematografico ilimitado el día del evento"
          },
          {
            name:'• Video Drone en todas las ubicaciones'
          },
          {
            name:"• Video principal editado del evento"
          },
          {
            name:"• Video de resumen (hight light)"
          },
          {
            name:'• Entrega de fotos y videos en USB personalizados.'
          },
          {
            name:"• Video en disco Blu Ray en caja personalizada. "
          },
          {
            name:'• Sesión de fotos para foto principal (Al aire libre o en estudio.)'
          },
          {
            name:"• Foto principal de 24x36 imprenta."
          },
          {
            name:'• Marco para foto principal 24x36 de lujo.'
          },
          {
            name:"• Album personalizado 12x12 luxury"
          },
          {
            name:"• Album 10x10 (fotografias de presicion)."
          },
          {
            name:"• 50 tarjetas de gratitud. (invitacion)"
          },
          {
            name:"• Slideshow de fotos."
          },
        ],
      price:'5800'
      }
  
  
  ]

  getPackageEs(){
    return this.dataEs
  }
}
