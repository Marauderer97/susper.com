import { TestBed, inject } from '@angular/core/testing';
import { ThemeService } from './theme.service';
describe('ThemeService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ThemeService]
        });
    });
    it('should be created', inject([ThemeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/soumya/dev/susper.com/src/app/theme.service.spec.js.map