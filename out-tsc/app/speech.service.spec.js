import { TestBed, inject } from '@angular/core/testing';
import { SpeechService } from './speech.service';
describe('SpeechService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SpeechService]
        });
    });
    it('should be created', inject([SpeechService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/speech.service.spec.js.map