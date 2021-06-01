import { Component, Input, OnInit, Output } from '@angular/core';
import { Band, Bands } from '../model/band';
import { BandsService } from './bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  @Input() bands: Bands;
  band: Band;
  clickedOnBand: boolean = false;
  editting: boolean = false;

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.viewBandsList();
  }

  chooseBand(value): void {
    this.band = value;
    this.clickedOnBand = true;
  }

  hideDetail(value: boolean): void {
    this.clickedOnBand = value;
  }

  viewForm(e): void {
    this.editting = e;
  }

  private viewBandsList(): void {
    this.bandsService.viewList()
    .subscribe((bandsList)=>{
      this.bands = bandsList;
    })
  }



}
