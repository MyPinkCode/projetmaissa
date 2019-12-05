import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log: string ;
  @Output() onChange = new EventEmitter<string>();
   onEnvoyer() { this.onChange.emit(this.log);}
admin:string;
onclick(event:any){
this.admin=event.target.value;}
chn:string;
onchange(chn:string)
{ }

 
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //this.chn=this.activatedRoute.snapshot.params['ch'];

  }

}
