import { Component, Input, OnInit } from '@angular/core';
import { Bands } from '../model/band';
import { BandsService } from './bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  @Input() bands: Bands;

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
    this.viewBandsList();
  }

  private viewBandsList(): void {
    this.bandsService.viewList()
    .subscribe((bandsList)=>{
      this.bands = bandsList;
    })
  }

}
