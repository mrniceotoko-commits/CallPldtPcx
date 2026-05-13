import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonContent,IonToolbar, IonGrid, IonHeader, IonIcon, IonRow, IonSearchbar, IonText, IonTitle, IonCol } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';    


@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.page.html',
  styleUrls: ['./demopage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonText,IonSearchbar,IonButton,IonGrid,IonCol,IonRow,IonText,IonCardContent,IonCard,IonIcon, CommonModule,FormsModule]
})
export class DemopagePage implements OnInit {

  constructor() {
    addIcons
    ({
      'refresh-outline': refreshOutline
    });
   }

  ngOnInit() {
  }}
