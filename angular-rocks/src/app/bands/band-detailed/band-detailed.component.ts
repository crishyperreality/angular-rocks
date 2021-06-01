import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band, Bands } from 'src/app/model/band';
import { BandsService } from '../bands.service';

@Component({
  selector: 'app-band-detailed',
  templateUrl: './band-detailed.component.html',
  styleUrls: ['./band-detailed.component.scss']
})
export class BandDetailedComponent implements OnInit {

  @Input() bandDetailed: Band;
  remainingBands: Bands;
  @Output() goToMainPage = new EventEmitter<boolean>();
  @Output() editting = new EventEmitter<boolean>();

  constructor(private bandsService: BandsService) { }

  ngOnInit(): void {
  }

  return(): void {
    this.goToMainPage.emit(false)
  }

  deleteBand(band: Band):void{
    if(window.confirm('¿Seguro que quieres eliminar esta banda del listado?')){
      let changeBand = Object.assign(band, {
        visible: 0,
      });

      this.bandsService.deleteBand(changeBand)
      .subscribe((x)=>{
        alert('Has eliminado la banda de la lista')
        window.location.reload()
        this.goToMainPage.emit(false)
      })
    }
  }

  editBand(): void {
    this.editting.emit(true);
  }

}
