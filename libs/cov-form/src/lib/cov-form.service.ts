import { Injectable } from '@angular/core';
import { CustomValidators } from './validators/custom-validators';
import { ValidatorService } from './validators/validator.service';

@Injectable({
  providedIn: 'root'
})
export class CovFormService {

  constructor(
    protected custom: CustomValidators,
    protected defalt: ValidatorService
  ) { }
}
