import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-example-schema-form',
  templateUrl: './example-schema-form.component.html',
  styleUrls: ['./example-schema-form.component.scss']
})
export class ExampleSchemaFormComponent implements OnInit {

  // example schema. you can also load such an schema via json using resolveJsonModule option in tsc
  // more examples can be found here: https://github.com/hamzahamidi/ajsf/tree/master/demo/assets/example-schemas
  formJsonSchema = {
    'schema': {
      'title': 'Custom validation',
      'description' :
        'This form defines custom validation rules checking that the two passwords match.',
      'type': 'object',
      'properties': {
        'pass1': {
          'title': 'Password',
          'type': 'string',
          'minLength': 3
        },
        'pass2': {
          'title': 'Repeat password',
          'type': 'string',
          'minLength': 3
        },
        'age': {
          'title': 'Age',
          'type': 'number',
          'minimum': 18
        }
      }
    },
    'uiSchema': {
      'pass1': { 'ui:widget': 'password' },
      'pass2': { 'ui:widget': 'password' }
    },
    'formData': {},
    'validate': function ({ pass1, pass2 }, errors) {
      if (pass1 !== pass2) {
        errors.pass2.addError('Passwords don\'t match.');
      }
      return errors;
    },
    'transformErrors': function(errors) {
      return errors.map(error => {
        if (error.name === 'minimum' && error.property === 'instance.age') {
          return Object.assign({}, error, {
            message: 'You need to be 18 because of some legal thing',
          });
        }
        return error;
      });
    }
  };


  constructor() { }


  ngOnInit(): void {
  }

  onSubmitFn(event: any) {}

}
