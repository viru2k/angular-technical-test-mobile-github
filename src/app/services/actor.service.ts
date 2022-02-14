// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

//Store
import { BaseActoresFacade } from '../store/actores/actores.facade';

//Api
import { Actor } from '../models/Actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private url: string = 'http://localhost:3000/';

  constructor(
    public http: HttpClient,
    private actoresFacade: BaseActoresFacade
  ) {}

  getActores(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.url + 'actors');
  }

  getActorById(actor: Actor): Observable<Actor> {
    return this.http.get<Actor>(this.url + 'actors/' + actor.id);
  }

  postActor(actor: Actor): Observable<Actor[]> {
    return this.http.post<Actor[]>(this.url + 'actors', actor);
  }

  putActor(actor: Actor): Observable<Actor[]> {
    return this.http.put<Actor[]>(this.url + 'actors/' + actor.id, actor);
  }

  deleteActor(actor: Actor): Observable<Actor[]> {
    return this.http.delete<Actor[]>(this.url + 'actors/' + actor.id);
  }
}
