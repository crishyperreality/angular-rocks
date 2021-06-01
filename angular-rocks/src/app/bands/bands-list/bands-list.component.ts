import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band, Bands } from 'src/app/model/band';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.scss']
})
export class BandsListComponent implements OnInit {

  @Input() bands: Bands; 
  @Output() selectedBand = new EventEmitter<Band>();
  @Output() editting = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectBand(band: Band): void {
    this.selectedBand.emit(band)
  }

  showForm(): void {
    this.editting.emit(true)
  }

}
