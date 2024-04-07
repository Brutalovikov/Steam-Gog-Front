import { Pipe, PipeTransform } from '@angular/core';

//Пайп для преобразования времени в игре, которое изначально передается в секундах из СТима
@Pipe({
  name: 'm2h'
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + ' ч. ' + minutes + ' мин.';
  }
}