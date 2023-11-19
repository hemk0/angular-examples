import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twitch-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twitch-chat.component.html',
  styleUrl: './twitch-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitchChatComponent {

}
