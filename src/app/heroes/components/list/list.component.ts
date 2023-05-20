import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName: string[] = ['Ironman','Spiderman','Hulk'];
  public deleteHeroe?: string;
  public removeLastHeroe():void{
    this.deleteHeroe = this.heroesName.pop();
  }
}
