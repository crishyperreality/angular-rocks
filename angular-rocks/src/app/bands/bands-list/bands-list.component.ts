import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Band, Bands } from 'src/app/model/band';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bands-list',
  templateUrl: './bands-list.component.html',
  styleUrls: ['./bands-list.component.scss']
})
export class BandsListComponent implements OnInit {

  @Input() bands: Bands; 
  @Output() selectedBand = new EventEmitter<Band>();
  @Output() editting = new EventEmitter<boolean>()
  @Output() searching = new EventEmitter<string>();
  @Output() defineFormTitle = new EventEmitter<string>();
  search = new FormControl('');
  @Input() filterValue: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
      )
    .subscribe((value)=>{
      this.searching.emit(value);
    })
  }

  selectBand(band: Band): void {
    this.selectedBand.emit(band)
  }

  showForm(): void {
    this.editting.emit(true);
    this.defineFormTitle.emit('Añadir banda')
  }

}
