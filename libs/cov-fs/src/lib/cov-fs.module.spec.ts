import { async, TestBed } from '@angular/core/testing';
import { CovFsModule } from './cov-fs.module';

describe('CovFsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovFsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CovFsModule).toBeDefined();
  });
});
