import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandsService } from '../bands.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent implements OnInit {

  bandForm: FormGroup;
  @Output() edittingForm = new EventEmitter<boolean>();

  constructor(fb: FormBuilder, private bandsService: BandsService) {
    this.bandForm = fb.group({
      name: ['', [Validators.required]],
      info: ['', [Validators.required,]],
      video: [''],
      image: ['']
    })
   }

  ngOnInit(): void {
  }

  saveBand(): void {
    console.log('vale')
    if (this.bandForm.valid){
      this.bandsService.addBand(this.bandForm.value)
      .subscribe((x)=>{
        alert('¡Has guardado la banda correctamente!')
        this.edittingForm.emit(false);
      })
    } else {
      console.log('no mi ciela')
    }
  }

}
