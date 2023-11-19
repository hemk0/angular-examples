import { Injectable } from '@angular/core';
import { Observable, interval, map, of, take } from 'rxjs';
import { Message } from '../@types/message.type';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatId = 0;
  constructor() { }

  getMessages(): Observable<Message> {
    return interval(Math.random() * 1000).pipe(
      map(() => {
        return ({
          id: this.chatId++,
          text: this.chatId + 'message text message text message text message text',
          author: Math.random() > .5 ? {id: 1, name: 'Ron'} : {id: 2, name: 'Hermione'}
        })
      })
    )
  }

  loadMany(): Observable<Message[]> {
    const messages = [];

    for (let i=1; i < 15; i = i + 1){
      messages.push({
        id: this.chatId++,
        text: this.chatId + 'message text message text message text message text',
        author: Math.random() > .5 ? {id: 1, name: 'Ron'} : {id: 2, name: 'Hermione'}
      })
    }

    return of(messages)
  }
}
