import { PouchDBService } from './../db/pouchdb.service';
import { Injectable } from '@angular/core';
import { Database } from '../../models/domain.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly roles = [
    'user',
    'municipality_admin',
    'municipality_officer',
    'cict_investigator',
    'cict_contact_tracer',
    'lab_admin',
    'lab_sample_collector',
    'lab_reporter',
    'field_sample_collector',
    'municipality_officer',
    'municipality_officer',
    'municipality_admin',
    'municipality_officer',
    'cict_investigator',
    'cict_contact_tracer',
    'lab_admin',
    'lab_admin',
    'lab_admin',
    'lab_sample_collector',
    'lab_sample_collector',
    'lab_sample_collector',
    'lab_reporter',
    'lab_reporter',
    'field_sample_collector'
  ];

  constructor(private pouchDbService: PouchDBService) { }

  /**
   * Check for the existence of the needed roles and add if necessary
   */
  checkedAddRoles(): void {
    this.pouchDbService.getAll(Database.matrix);
  }
}
