import { Injectable } from '@angular/core';
import {Galery} from './../model/galery.model';
@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor() { }

galery:Galery[]=[
  {
    url:'./../../../../assets/images/1.jpg'
  },
  {
    url:'./../../../../assets/images/foto.jpg'
  },
  
  {
    url:'./../../../../assets/images/2.jpg'
  },
  
  {
    url:'./../../../../assets/images/3.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/4.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/5.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/6.jpg'
  }
  
]

video:Galery[]=[
  {
    url:'./../../../../assets/video/1.mp4'
  },
  {
    url:'./../../../../assets/video/2.mp4'
  },
  {
    url:'./../../../../assets/video/3.mp4'
  },
  {
    url:'./../../../../assets/video/4.mp4'
  },
]

getGalery(){
  return this.galery;
}

getVideo(){
  return this.video;
}

}
