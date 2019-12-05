import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  submitted:boolean=false;
  nom:string;
  id:string;
  prix:number;
  qte:number;
  option:boolean;
  im1:string="";
  im2:string="";
  tp:string="";
  dispo:string;
  message:string="";


  
  constructor(private service:ServiceService) { }
  onSubmit(f:NgForm)
  {
    this.submitted =true;
    console.log(f.value['nom']);
    const modifier = this.service.modify(this.id, this.nom,this.prix,this.qte,this.option,this.im1,this.im2,this.tp,this.dispo);
    if(modifier)
      this.message="Votre  produit: " + this.nom + " a bien été modifié !";
    else
      this.message="Le produit d'id "+ this.id+" est inéxistant ! ";
  }

  ngOnInit() {
  }

}
