import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Joke } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private http = inject(HttpClient);

  constructor() { }

  getJoke() {
    return this.http.get<Joke>('https://official-joke-api.appspot.com/random_joke');
  }

}
