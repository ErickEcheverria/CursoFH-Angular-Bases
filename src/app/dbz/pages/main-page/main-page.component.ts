import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { dbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService:dbzService){
  }

  get characterList(): Character[]{
    return [...this.dbzService.characterList];
  }

  onDeleteCharacter(id:string){
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);
  }

}
