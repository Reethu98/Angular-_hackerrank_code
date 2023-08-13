import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})

export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  name: string = ""
  genre: string = ""
  creator: string = ""
  selectedType: string = ""
  time: number = null

  ngOnInit() {

  }

  onSubmit() {
    const newItem: Item = {
      name: this.name,
      genre: this.genre,
      creator: this.creator,
      type: this.selectedType,
      totalTime: this.time,
    }
    this.name = ""
    this.genre = ""
    this.creator = ""
    this.selectedType = ""
    this.time = null
    this.onItemAdded.emit(newItem);
  }

}
