import { Injectable } from '@angular/core';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  products = [
    new Products("t1", 'Téléviseur VEGA 32 LED HD',449,30,true,"./assets/im1.jpg","./assets/r1.png","","Disponible"),
    new Products("t2","Téléviseur VEGA 40 LED HD ",619,30,false,"./assets/im2.jpg","./assets/r2.png","","Disponible"),
    new Products("t3","Téléviseur SAMSUNG 32 HD",2689,0,false,"./assets/im3.jpg","./assets/r3.png","","COMMANDE 48H"),
    new Products("t4","Téléviseur LG 32HD",1679,30,true,"./assets/im4.jpg","./assets/r4.png","","Disponible"),
    new Products("p1","PC Portable VEGABOOK Blanc",449,30,true,"./assets/p2.jpg","./assets/pr3.png","","Disponible"),
    new Products("p2","PC Portable SCHNEIDER",449,30,true,"./assets/p3.jpg","./assets/pr4.png","","Disponible"),
    new Products("p3","PC Portable ASUS VivoBook",2689,0,true,"./assets/p4.jpg","./assets/pr2.png","","COMMANDE 48H"),
    new Products("p4","Pc Portable HP Noir ",899,30,true,"./assets/p5.jpg","./assets/pr1.png","","EPUISE"),
    new Products("s1","Smartphone EVERTEK V5 3G",203,30,true,"./assets/t2.jpg","./assets/tt1.png","","Disponible"),
    new Products("s2","Smartphone EVERTEK M10 3G",219,30,true,"./assets/t3.jpg","./assets/tt3.png","","Disponible"),
    new Products("s3","Smartphone TECNO Pop 2",249,30,true,"./assets/t4.jpg","./assets/tt4.png","","COMMANDE 48H"),
    new Products("s4","Apple iPhone 8 64Go Rouge",2499,30,true,"./assets/t1.jpg","./assets/tt2.png","","EPUISE")


  ]

public getProduitByID(id:string)
{
  for(let p of this.products)
  {
    if(p.id== id)
    return p;
  }
}

public addProduit(id: string, nom:string,prix:number,qte:number,option:boolean,im1:string,im2:string,tp:string,dispo:string):boolean
{
 
 if(this.getProduitByID(id)==null)
    {this.products.push(new Products(id, nom,prix,qte,option,im1,im2,tp,dispo));
      return true;
    }    
    return false;
}
public modify(id:string, nom:string,prix:number,qte:number,option:boolean,im1:string,im2:string,tp:string,dispo:string):boolean
 {
 if(this.getProduitByID(id)!=null)
    {for(let i=0;i<this.products.length;i++){
      if (id=this.products[i].id){
        if(id  != null)
        {this.products[i].id=id;}
        if(nom  != null)
        {this.products[i].nom=nom;}
        if(prix  != null)
        {this.products[i].prix=prix;}
        if(qte  != null)
        {this.products[i].qte=qte;}
        if(option  != null)
        {this.products[i].option=option;}
        if(id  != null)
        {this.products[i].im1=im1;}
        if(id  != null)
        {this.products[i].im2=im2;}
        if(tp  != null)
        {this.products[i].tp=tp;}
        if(dispo  != null)
        {this.products[i].dispo=dispo;}
        return true;
      }
    }
    return false;
    
}
}

  public delete(id:string):boolean{
    if(this.getProduitByID(id)!=null){
      {for(let i=0;i<this.products.length;i++){
        if (id==this.products[i].id){
          this.products.splice(i,1);
          return true;
        }
      }
  }
  
  return false;
}
  }
    
  


  constructor() { }
}
