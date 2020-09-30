import { async, TestBed } from '@angular/core/testing';
import { CovFormModule } from './cov-form.module';

describe('CovFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovFormModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CovFormModule).toBeDefined();
  });
});
