import { ICharacter } from "./icharacter.character";

export interface ICharactersDto {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    };
    results: ICharacter[];
}
