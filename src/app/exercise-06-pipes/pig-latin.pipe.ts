import {Pipe, PipeTransform} from '@angular/core';

/*
 * Transform a sentence into pig latin
 */
@Pipe({name: 'piglatin'})
export class PigLatinPipe implements PipeTransform {

    transform(value: string): string {
        if (value !== undefined || typeof value === 'string') {
            let tokens = value.split(' ');
            let results = tokens.map((token) => {
                let sanitizedToken = token.toLowerCase();
                let result: string;
                let startingVowelPosition = sanitizedToken.search(/[aeiou]/);
                let startingConsonentPosition = sanitizedToken.search(/[bcdfghjklmnpqrstvwxyz]/);
                if (startingVowelPosition === 0) {
                    result = token + 'yay';
                } else if (startingConsonentPosition > -1) {
                    result = token.substring(startingVowelPosition) +
                        token.substring(0, startingVowelPosition) + 'ay';
                } else {
                    result = token;
                }

                return result;
            });
            return results.join(' ');
        } else {
            return value;
        }
    }
}