import { Injectable } from '@angular/core';
import {Galery} from './../model/galery.model';
@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor() { }

galery:Galery[]=[
  {
    url:'./../../../../assets/images/1.jpg',
    url2:'./../../../../assets/images/3.jpg'
  },
  {
    url:'./../../../../assets/images/foto.jpg',
    url2: './../../../../assets/images/20.jpg'
  },
  
  {
    url:'./../../../../assets/images/2.jpg',
    url2:'./../../../../assets/images/10.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/4.jpg',
    url2:'./../../../../assets/images/13.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/14.jpg',
    url2:'./../../../../assets/images/15.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/16.jpg',
    url2:'./../../../../assets/images/17.jpeg'
  }
  ,
  {
    url:'./../../../../assets/images/18.jpg',
    url2:'./../../../../assets/images/19.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/27.JPEG',
    url2:'./../../../../assets/images/28.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/29.JPEG',
    url2:'./../../../../assets/images/30.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/31.JPEG',
    url2:'./../../../../assets/images/32.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/33.JPEG',
    url2:'./../../../../assets/images/34.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/35.JPEG',
    url2:'./../../../../assets/images/36.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/37.JPEG',
    url2:'./../../../../assets/images/38.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/39.JPEG',
    url2:'./../../../../assets/images/40.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/41.jpg',
    url2:'./../../../../assets/images/42.JPEG'
  }
  ,
  {
    url:'./../../../../assets/images/43.jpg',
    url2:'./../../../../assets/images/44.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/45.jpg',
    url2:'./../../../../assets/images/46.jpg'
  }
  ,
  {
    url:'./../../../../assets/images/47.JPEG',
    url2:'./../../../../assets/images/48.JPEG'
  }
  
]



video:Galery[]=[
  {
    url:'./../../../../assets/video/6.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/5.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/1.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/2.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/3.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/44.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/7.mp4',
    url2:''
  },
  {
    url:'./../../../../assets/video/8.mp4',
    url2:''
  },
  
 
  
]

getGalery(){
  return this.galery;
}

getVideo(){
  return this.video;
}

}
