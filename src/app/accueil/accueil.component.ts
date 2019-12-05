import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  tab=["assets/im4.webp","assets/im5.webp","assets/im6.webp"];
  img="assets/im5.webp";
  k=0;
oncal(n)
{
if (this.k+n<0 )
  {this.img=this.tab[this.k+2];
    this.k=this.k+2;
  }
else {if(this.k+n>2)
  {this.img=this.tab[this.k-2];
  this.k=this.k-2;
  }


  else{
  this.img=this.tab[this.k+n];
  this.k=this.k+n;
  }
}
}
  constructor() { }

  ngOnInit() {
  }

}
