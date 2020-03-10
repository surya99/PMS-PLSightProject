import { Component, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector:'pm-star',
    templateUrl:'product-starcomponent.html',
    styleUrls:['starcomponent.css']
})

export class StarComponent implements OnChanges{

   @Input() starrating:number;
   starWidth:number;

//    @Output() notify: EventEmitter =new EventEmitter()
 
    ngOnChanges(){
        this.starWidth=this.starrating*75/5;
    }
    
    Notify():void{
alert(`The rating ${this.starrating} was clicked !!`)
    }

}