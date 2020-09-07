import { NgModule } from '@angular/core';
import { ConceptComponent } from './concept.component';
import { ManagerComponent } from './manager/manager.component';
import { StateComponent } from './manager/state/state.component';
import { DataComponent } from './manager/data/data.component';
import { MemoryComponent } from './manager/memory/memory.component';
import { DatabasesComponent } from './manager/databases/databases.component';
import { SyncComponent } from './manager/sync/sync.component';
import { EventBusComponent } from './event-bus/event-bus.component';



@NgModule({
  declarations: [ConceptComponent, ManagerComponent, StateComponent, DataComponent, MemoryComponent, DatabasesComponent, SyncComponent, EventBusComponent],
  imports: [
  ],
  exports: [ConceptComponent]
})
export class ConceptModule { }
