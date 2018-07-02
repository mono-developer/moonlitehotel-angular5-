import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appConflictSequence'
})
export class ConflictSequencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let innerContent = '';
    if (!value) {
      return innerContent;
    }
    const defaultColors = {b: 'blue', g: 'green', r: 'red'};
    let color = value;
    const colorLower = color.toLowerCase();
    const spanStart    = '<span class="color text-uppercase';
    const spanEnd    = '</span>';
    // When the value is "HUB", the H should be blue, the U should be
    // red, and the B should be green.
    if (colorLower === 'hub') {
      // each letter in hub has a different color so we need to
      // treat this color differently
      const letters = color.split('');
      letters.forEach((letter: string) => {
        innerContent += `${spanStart} ${letter.toLowerCase()}">${letter}${spanEnd}`;
      });
    } else {
      // Replace the letters with spans containing classes to show
      // each letter  in it's respective color
      color = color.replace(/_/g, '');
      const letters = color.split('');
      letters.forEach((letter, index) => {
        if (!index) {
          innerContent += `${spanStart} ${defaultColors[letter]}">${letter}${spanEnd}`;
        } else {
          innerContent += `-${spanStart} ${defaultColors[letter]}">${letter}${spanEnd}`;
        }
      });
    }

    return innerContent;
  }

}
