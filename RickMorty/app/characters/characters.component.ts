import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { ICharacter } from './icharacter.character';


@Component({
  selector: 'rm-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [CharactersService]
})


export class CharactersComponent implements OnInit {
  private _charactersService;
  characters: ICharacter[] = [];

  constructor(charactersService: CharactersService) {
    this._charactersService = charactersService;
  }

  ngOnInit(): void {
    this._charactersService.getCharacters().subscribe({
      next: charactersDto => this.characters = charactersDto.results,
      error: err => console.log('ERROR:\n' + err)
    });
  }

}
