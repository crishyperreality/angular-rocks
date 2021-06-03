import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  filterValue: string;
  sendFormTitle: string;

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.viewBandsList();
    console.log(this.clickedOnBand)
  }

  chooseBand(value): void {
    this.band = value;
    this.clickedOnBand = true;
  }

  hideDetail(value: boolean): void {
    this.clickedOnBand = value;
  }

  hideForm(value): void {
    console.log('ne')
    this.clickedOnBand = value;
  }

  viewForm(e): void {
    console.log(e);
    this.editting = e;
  }

  handleSearch(value): void {
    this.filterValue = value;
  }

  recieveFormTitle(content):void{
    this.sendFormTitle = content;
    console.log(content)
  }

  private viewBandsList(): void {
    this.bandsService.viewList()
    .subscribe((bandsList)=>{
      this.bands = bandsList;
    })
  }
}
