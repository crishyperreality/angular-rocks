import { Component, Input, OnInit } from '@angular/core';
import { Bands } from 'src/app/model/band';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.scss']
})
export class BandsListComponent implements OnInit {

  @Input() bands: Bands; 
  constructor() { }

  ngOnInit(): void {
  }

}
