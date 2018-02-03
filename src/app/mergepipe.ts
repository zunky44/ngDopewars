import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'merge' })
export class MergePipe implements PipeTransform {
  transform(arr1, arr2) {
    const arr = [];
    arr1.forEach((drug, i) => {
      arr.push({ drug: drug, price: arr2[i] });
    });
  }
}
