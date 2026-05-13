import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.page.html',
  styleUrls: ['./demopage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonText,IonSearchbar,IonButton,IonCol,IonRow,IonGrid,IonText,IonCardContent,IonCard,IonIcon, CommonModule,FormsModule]
})
export class DemopagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }}
