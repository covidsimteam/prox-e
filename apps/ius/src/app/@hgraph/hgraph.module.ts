import { NgModule } from '@angular/core';
import { HgraphComponent } from './hgraph.component';
import { CatchupComponent } from './store/catchup/catchup.component';
import { CryptoComponent } from './store/crypto/crypto.component';
import { DatabaseComponent } from './store/database/database.component';
import { HerderComponent } from './store/herder/herder.component';
import { HistoryComponent } from './store/history/history.component';
import { HistoryWorkComponent } from './store/history-work/history-work.component';
import { InvariantComponent } from './store/invariant/invariant.component';
import { LedgerComponent } from './store/ledger/ledger.component';
import { MainComponent } from './store/main/main.component';
import { OverlayComponent } from './store/overlay/overlay.component';
import { ProcessComponent } from './store/process/process.component';
import { ScpComponent } from './store/scp/scp.component';
import { SimComponent } from './store/sim/sim.component';
import { TestComponent } from './store/test/test.component';
import { TransactionComponent } from './store/transaction/transaction.component';
import { UtilComponent } from './store/util/util.component';
import { WorkComponent } from './store/work/work.component';
import { XdrComponent } from './store/xdr/xdr.component';

@NgModule({
  declarations: [
    HgraphComponent,
    CatchupComponent,
    CryptoComponent,
    DatabaseComponent,
    HerderComponent,
    HistoryComponent,
    HistoryWorkComponent,
    InvariantComponent,
    LedgerComponent,
    MainComponent,
    OverlayComponent,
    ProcessComponent,
    ScpComponent,
    SimComponent,
    TestComponent,
    TransactionComponent,
    UtilComponent,
    WorkComponent,
    XdrComponent,
  ],
  imports: [],
  exports: [HgraphComponent],
})
export class HgraphModule {}
