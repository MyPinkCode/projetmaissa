import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
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
    const ajout = this.service.addProduit(this.id, this.nom,this.prix,this.qte,this.option,this.im1,this.im2,this.tp,this.dispo);
    if(ajout)
      this.message="Votre nouveau produit: " + this.nom + " a bien été ajouté !";
    else
      this.message="Le produit d'id "+ this.id+" existe déjà !";
  }
 

  ngOnInit() {
  }

}
