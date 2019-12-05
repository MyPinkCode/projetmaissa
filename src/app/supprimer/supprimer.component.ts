import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  id:string;
  submitted:boolean=false;
  message:string;
  onSubmit(f:NgForm)
  {
    this.submitted =true;
    const supprimer = this.service.delete(this.id);
    if(supprimer)
      this.message="Le produit d'id " + this.id + " a bien été supprimé !";
    else
      this.message="Le produit d'id "+ this.id+" est inéxistant ! ";
  }

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

}
