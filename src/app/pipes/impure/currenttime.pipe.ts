import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'currenttime',
  pure: false 
})
export class CurrenttimePipe implements PipeTransform {
  currentTime: Date = new Date();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  transform(value: string): string {
    this.currentTime = new Date();
    this.changeDetectorRef.markForCheck(); 
    return this.currentTime.toLocaleTimeString();
  }

}
