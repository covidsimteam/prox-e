import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoleBoardsComponent } from './role-boards/role-boards.component';

@NgModule({
  declarations: [RoleBoardsComponent],
  imports: [
    CommonModule
  ],
  exports: [RoleBoardsComponent]
})
export class RoleBasedModules { }
