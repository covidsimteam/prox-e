import { Province } from '../../../@core/data/country-provinces';
import { NepaliDate, MatchA, District, Municipality, Ward, Tole } from '../../../@models/cict/forms/forms.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface NewCaseFormeta {
  reportedDate: Date;
  _reportedDate?: NepaliDate;

  reportedInstitution: string;

  caseName: string;
  phoneNum: number;

  province: string;
  _province?: MatchA<Province>;

  district: string;
  _district?: MatchA<District>;

  municipality: string;
  _municipality?: MatchA<Municipality>;

  wardNumber: number;
  _wardNumber?: MatchA<Ward>;

  tole: string;
  _tole?: MatchA<Tole>;

  caseInvestigator: string;
}


export const makeNewCaseFormModel: () => NewCaseFormeta = () => ({
  reportedDate: null,
  reportedInstitution: '',
  caseName: '',
  phoneNum: null,
  province: null,
  district: '',
  municipality: '',
  wardNumber: null,
  ward: null,
  tole: '',
  assignedTo: '',
  caseInvestigator: ''
});

type NewCaseFormField = keyof NewCaseFormeta;

export const makeNewCaseFormGroup: () => FormGroup = () => {
  const initForm = makeNewCaseFormModel();
  const newCaseFormGroup = new FormGroup({});
  Object.keys(initForm).forEach((key: NewCaseFormField) => {
    const primitiveTypeForKey = typeof initForm[key];
    switch (primitiveTypeForKey) {
      case 'string':
        newCaseFormGroup.addControl(key, new FormControl('', Validators.required));
        break;
      case 'number':
        newCaseFormGroup.addControl(key, new FormControl(null, Validators.required));
        break;
    }
  });
  return newCaseFormGroup;
};
