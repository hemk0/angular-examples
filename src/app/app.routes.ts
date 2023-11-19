import { Routes } from '@angular/router';
import { MainLayoutComponent } from './@layout/main-layout/main-layout.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'chat'},
    {path: 'chat', component: MainLayoutComponent, loadChildren: () => import('../app/@pages/chat/chat.module').then(m => m.ChatModule)},
    {path: 'twitch-chat', component: MainLayoutComponent, loadChildren: () => import('../app/@pages/twitch-chat/twitch-chat.module').then(m => m.TwitchChatModule)},
    {path: 'signals-state', component: MainLayoutComponent, loadChildren: () => import('./@pages/signals-state/checklist-example.module').then(m => m.ChecklistExampleModule)},
];
