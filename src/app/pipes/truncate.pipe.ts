import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, filmId?: number): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    return `${value.slice(0, limit)}... <a href="/films/${filmId}">Lire plus</a>`;
  }
}
