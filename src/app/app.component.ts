import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:`<div><h1>{{title}}</h1>
            </div> <prduct-home></prduct-home>`,
 
})

export class MyApp{
title:string="Product Mangament System"
}
