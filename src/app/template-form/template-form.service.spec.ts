/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemplateFormService } from './template-form.service';

describe('TemplateFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateFormService]
    });
  });

  it('should ...', inject([TemplateFormService], (service: TemplateFormService) => {
    expect(service).toBeTruthy();
  }));
});
