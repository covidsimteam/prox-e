import { async, TestBed } from '@angular/core/testing';
import { CovSchedModule } from './cov-sched.module';

describe('CovSchedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovSchedModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CovSchedModule).toBeDefined();
  });
});
