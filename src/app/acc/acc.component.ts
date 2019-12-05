import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {
  produits : Products[];
  constructor(private service:ServiceService) { }
  
  ngOnInit() {
    this.produits = this.service.products;

  }

y:string;

 oncli(x1)
 {this.y=x1.im1;
   x1.im1=x1.im2;
 }
 cal(x1)
 { if (x1.im1 == x1.im2)
  x1.im1=this.y;
  
 }
 opti1(b,ch)
 {if (ch =='tv')
  {b.tp="+Support TV gratuit";}
  else {if (b.nom=='PC Portable VEGABOOK Blanc')
  {b.tp="+Forfait internet Ooredoo +Etui";}
else
  {b.tp="+Forfait internet Ooredoo ";}
 }
}
ajouter(t)
{
t.qan+=1;
t.dispo='disponible  ';
}

chaine:string;
rech1:any="";

recherche()
{
  this.rech1="";
  for(let k=0;k<this.produits.length;k++)
{
  if(this.produits[k].id==this.chaine)
    this.rech1=this.produits[k]; 
}


 
 
 

}


}
