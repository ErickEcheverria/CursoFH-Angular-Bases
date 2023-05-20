import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {

  public characterList: Character[] = [{
    id : uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id : uuid(),
    name: 'Goku',
    power: 9500
  }];

  public onNewCharacter(character: Character):void{
    const newCharacter:Character = {id: uuid(), ...character};
    this.characterList.push(newCharacter);
  }

  // public onDeleteCharacter(index: number):void{
  //   this.characterList.splice(index,1);
  // }

  public deleteCharacterById(id: string){
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

}
