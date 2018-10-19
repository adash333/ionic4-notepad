import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private alertCtrl: AlertController, 
    private navCtrl: NavController,
    private notesService: NotesService
  ) {
 
  }

  ngOnInit() {
    this.notesService.load();
  }

  addNote() {

    this.alertCtrl.create({
      header: '新しいノートを作成',
      message: 'ノートの題名を記載してください',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'キャンセル'
        },
        {
          text: '保存',
          handler: (data) => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }
  
}
