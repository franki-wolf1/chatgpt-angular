import { Component } from '@angular/core';
import { ChatgptService } from '../services/chatgpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message!:string;

  constructor(private chatgptSvc:ChatgptService){}


  sendMessage(){

    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message = '';

  }

  limpiar(){

    location.reload();

  }

}
