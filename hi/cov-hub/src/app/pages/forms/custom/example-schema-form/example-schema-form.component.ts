import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-example-schema-form',
  templateUrl: './example-schema-form.component.html',
  styleUrls: ['./example-schema-form.component.scss']
})
export class ExampleSchemaFormComponent implements OnInit {

  formJsonSchema: any;

  constructor() { }


  ngOnInit(): void {
  }

  onSubmitFn(event: any) {}

}
