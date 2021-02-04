import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {ICharacter} from './icharacter.character'
import { Observable, ObservableInput } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICharactersDto } from './icharacters-dto.CharactersDto';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characterUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http:HttpClient ) { 

  }

  getCharacters() : Observable<ICharactersDto> {
    return this.http.get<ICharacter[]>(this.characterUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
      );
  }
  
  private handleError(err: HttpErrorResponse) : ObservableInput<any>{
    console.log(err);
    return "error";
  }
}
