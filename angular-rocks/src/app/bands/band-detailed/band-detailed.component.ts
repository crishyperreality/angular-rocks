import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band } from 'src/app/model/band';

@Component({
  selector: 'app-band-detailed',
  templateUrl: './band-detailed.component.html',
  styleUrls: ['./band-detailed.component.scss']
})
export class BandDetailedComponent implements OnInit {

  @Input() bandDetailed: Band;
  @Output() goToMainPage = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  return(): void {
    this.goToMainPage.emit(false)
  }

}
