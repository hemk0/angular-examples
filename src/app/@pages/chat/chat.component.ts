import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./components/layout/layout.component";
import { MessageContainerComponent } from "./components/message-container/message-container.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [CommonModule, LayoutComponent, MessageContainerComponent]
})
export class ChatComponent {

}
