import { Component, OnInit ,EventEmitter} from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  date = new Date();
  adm:string="undefined";
  ch:string ; 
  val : string;
 
    
  
 
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  
  ngOnInit() {
    this.adm=this.activatedRoute.snapshot.params['admin'];
    this.ch="../../assets/admin.png"; 
    if (this.adm="maissa"){this.ch="../../assets/dell.jpg";}
    if (this.adm="emna"){this.ch="../../assets/telefunken.jpg";}
    
    //this.ch=this.activatedRoute.snapshot.params['chn'];

  }


}
