import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ngx-form-b1',
  templateUrl: './form-b1.component.html',
  styleUrls: ['./form-b1.component.scss']
})
export class FormB1Component implements OnInit {

  constructor(
    private fb: FormBuilder,
    private translator: TranslateService,
    public t: TranslationServiceEn
    ) {
    translator.use('en');
    // translator.get(t.fab.thahaChhaina)
    //   .pipe(take(1))
    //   .subscribe((chhaina: string) => {
    //     this.caseStatus = chhaina;
    //   });
  }

  ngOnInit(): void {
  }

}
