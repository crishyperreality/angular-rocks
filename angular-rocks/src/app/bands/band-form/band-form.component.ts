import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Band } from 'src/app/model/band';
import { BandsService } from '../bands.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent implements OnInit {

  bandForm: FormGroup;
  @Input() bandToEdit: Band;
  @Output() edittingForm = new EventEmitter<boolean>();

  constructor(fb: FormBuilder, private bandsService: BandsService) {
    this.bandForm = fb.group({
      name: ['', [Validators.required]],
      info: ['', [Validators.required]],
      video: [''],
      image: ['']
    })
   }

  ngOnInit(): void {
    console.log(this.bandToEdit);
  }

  saveBand(): void {
    this.verifyInputs();
      if(this.bandForm.valid){
        if(this.bandToEdit){
          let changedBand = Object.assign(this.bandForm.value,{
            band_id: this.bandToEdit.band_id})
          this.bandsService.editBand(changedBand)
          .subscribe((x)=>{
            alert('¡Has modificado la banda correctamente!')
            this.edittingForm.emit(false);
            window.location.reload();
          })
        } else {
          this.bandsService.addBand(this.bandForm.value)
          .subscribe((x)=>{
            alert('¡Has guardado la banda correctamente!')
          })
        }
      }
    } 
  
  private verifyInputs(): void {
    if(this.bandForm.value.name === ''){
      this.bandForm.controls['name'].setValue(this.bandToEdit.name);
    }
    if(this.bandForm.value.info === ''){
      this.bandForm.controls['info'].setValue(this.bandToEdit.info);
    }
    if(this.bandForm.value.video === ''){
      this.bandForm.controls['video'].setValue(this.bandToEdit.video);
    }
    // if(this.bandForm.value.image === ''){
    //   this.bandForm.controls['image'].setValue(this.bandToEdit.image);
    // }
  }

}
