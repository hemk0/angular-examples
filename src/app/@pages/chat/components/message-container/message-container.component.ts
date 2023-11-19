import { AfterRenderPhase, ChangeDetectionStrategy, Component, HostBinding, Inject, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChatService } from '../../../../@services/chat.service';
import { Message } from '../../../../@types/message.type';
import { MessageComponent } from "../message/message.component";
import { InViewPortDirective } from '../../../../@directives/in-view-port.directive';
import { take } from 'rxjs';
import { log } from 'node:console';

@Component({
    selector: 'app-message-container',
    standalone: true,
    templateUrl: './message-container.component.html',
    styleUrl: './message-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MessageComponent, InViewPortDirective]
})
export class MessageContainerComponent {
  messageService = inject(ChatService);
  messages = signal<Message[]>([]);
  messageSectionIndex = signal(0);
  additionalMessages = signal<{id: number, messages: Message[]}[]>([]);
  isBrowser = isPlatformBrowser(this.platformId);

  @HostBinding('style.overflow-anchor') private overflowAnchor: 'auto' | 'none' = 'none' 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if(!this.isBrowser) {
      return;
    }
    this.messageService.getMessages().subscribe(m => {
      this.overflowAnchor = 'auto';
      this.messages.update(prev => [...prev, m]);
      setTimeout(() => {
        this.overflowAnchor = 'none';
      }, 0)
    });
  }

  loadNext() {
    console.log('load next');
    this.messageService.loadMany().pipe(take(1)).subscribe(messages => {
      this.additionalMessages.update(prev => [{id: this.messageSectionIndex(), messages: messages}, ...prev ]);
    })
  }
}
