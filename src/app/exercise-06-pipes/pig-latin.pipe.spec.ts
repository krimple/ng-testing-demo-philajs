import {PigLatinPipe} from './pig-latin.pipe';
describe('Pig Latin Pipe', () => {
    let pigLatinPipe = new PigLatinPipe();

    it('should translate simple vowels to vowel + yay', () => {
        expect(pigLatinPipe.transform('I am a camera'))
            .toBe('Iyay amyay ayay ameracay');
    });

    it('should translate single consonant prefix words properly', () => {
        expect(pigLatinPipe.transform('I believe in Justin Beiber'))
            .toBe('Iyay elievebay inyay ustinJay eiberBay');
    });
});