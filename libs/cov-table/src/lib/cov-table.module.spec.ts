import { async, TestBed } from '@angular/core/testing';
import { CovTableModule } from './cov-table.module';

describe('CovTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovTableModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CovTableModule).toBeDefined();
  });
});
