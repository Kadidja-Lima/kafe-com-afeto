import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.css']
})
export class MiniatureComponent {

  products: any[] = [];
  @Input() images: string[] = [];
  @Output() onClickImage: EventEmitter<string> = new EventEmitter()
  selectedImage: string = '';


  constructor() {}

clickImage(url:string){
  this.onClickImage.emit(url)
  this.selectedImage = url;
}

}

