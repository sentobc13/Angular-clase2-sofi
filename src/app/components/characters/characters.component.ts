import { Component, OnInit } from '@angular/core';
import { CharactersInterface } from '../../interfaces/characters-interface';
import { CharactersService } from '../../services/characters.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})

export class CharactersComponent implements OnInit{
  public characters: Array<CharactersInterface> = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
      }
    })
  }
}

// ejemplo:

// export class CharactersComponent implements OnInit{
// // useEffect(() => {

// // }, [])
// public fruta = 'manzana'

// ngOnInit(): void {
//   setTimeout(() => {
//     this.fruta = 'pera'
//   }, 2000);
// }
// }
