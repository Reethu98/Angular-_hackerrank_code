import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  isDark: boolean = false;
theme:String ="Light Theme";
  @Output() onThemeChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }
  OnClickButton(){
this.isDark = !this.isDark;
if(this.isDark){
  this.theme = "Dark Theme";
  this.onThemeChanged.emit('Dark');

}
else{
  this.theme = "Light Theme";
  this.onThemeChanged.emit('Light');
}


  }

  getIcon() {
    return this.isDark ? 'brightness_high' : 'wb_sunny'
  }

}
