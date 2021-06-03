import { identifierModuleUrl, ReadVarExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Band } from 'src/app/model/band';
import { BandsService } from '../bands.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent{

  @Input() bandToEdit: Band;
  @Input() formTitle: string;
  @Output() edittingForm = new EventEmitter<boolean>();
  @Output() goToMainPage = new EventEmitter<boolean>();
  bandForm: FormGroup;
  selectedImage: File;

  constructor(fb: FormBuilder, private bandsService: BandsService) {

    this.bandForm = fb.group({
      name: ['', [Validators.required]],
      info: ['', [Validators.required]],
      video: [''],
      image: ['']
    })
   }

  saveBand(): void {
    this.verifyInputs();
    this.embedVideo();
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
            this.edittingForm.emit(false);
            window.location.reload();
          }) 
        }
      }
    }  

    return(): void {
      this.goToMainPage.emit(false)
      this.edittingForm.emit(false)
    }
  
  private verifyInputs(): void {
    if(this.bandForm.value.name === '' && this.bandToEdit.name){
      this.bandForm.controls['name'].setValue(this.bandToEdit.name);
    }
    if(this.bandForm.value.info === '' && this.bandToEdit.info){
      this.bandForm.controls['info'].setValue(this.bandToEdit.info);
    }
    if(this.bandForm.value.video === '' && this.bandToEdit.video){
      this.bandForm.controls['video'].setValue(this.bandToEdit.video);
    }
    if(this.bandForm.value.image === '' && this.bandToEdit.image){
      this.bandForm.controls['video'].setValue(this.bandToEdit.image);
    }
  }

  private embedVideo(): void {
    if(this.bandForm.get('video').value.includes('youtube')){
      let embed = this.bandForm.get('video').value.replace('watch?v=', 'embed/')
      this.bandForm.controls['video'].setValue(embed);
    }
  }
}
