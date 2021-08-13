import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input() options: string[] = [];

  onChange!: (selected: string) => void;
  onTouch!: () => void;

  disabled = false;
  isOpened = false;
  selectedValue = '';

  constructor() {}

  ngOnInit(): void {}

  writeValue(selected: string): void {
    this.selectedValue = selected;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setSelectedValue(option: string): void {
    if (this.disabled) return;
    this.selectedValue = option;
    this.onChange(this.selectedValue);
    this.onTouch();
    this.isOpened = false;
  }
}
