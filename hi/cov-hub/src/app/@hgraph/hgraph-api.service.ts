import { Injectable } from '@angular/core';
import { CacheService, CacheStream } from './cache/cache.service';
import { ConceptService, ConceptStream } from './concept/concept.service';
import { EntityService, ValueStream } from './entity/entity.service';
import { HgraphService } from './hgraph.service';
import { IdentityService } from './identity/identity.service';
import { InterstellarService } from './interstellar/interstellar.service';
import { KeyService } from './key/key.service';
import { Graph } from './model/hgraph.model';
import { ModelService } from './model/model.service';
import { CosmosStream, IdStream, ModelStream, PaymentStream, PipeStream, ThemeStream, UserStream } from './model/model.stream';
import { PaymentService } from './payment/lib/payment.service';
import { PipeService } from './pipes/pipe.service';
import { QueueService, TemporalQueue } from './queue/queue.service';
import { SsotService, TruthStream } from './ssot/ssot.service';
import { ThemeService } from './theme/theme.service';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HgraphApiService {

  constructor(
    private graph: HgraphService,
    private cache: CacheService,
    private concept: ConceptService,
    private entity: EntityService,
    private identity: IdentityService,
    private key: KeyService,
    private model: ModelService,
    private queue: QueueService,
    private ssot: SsotService,
    private payment: PaymentService,
    private xellar: InterstellarService,
    private pipe: PipeService,
    private user: UserService,
    private theme: ThemeService) { }

  updateInMemoryGraph(g: Graph, remove = false): Graph {
    this.graph.updateNodes(g.nodes, remove);
    this.graph.updateEdges(g.edges, remove);
    return this.graph.graph;
  }

  get themes(): ThemeStream { return this.theme.theme; }
  get xellars(): CosmosStream { return this.xellar.cosmo; }
  get pipes(): PipeStream { return this.pipe.pipe; }
  get caches(): CacheStream { return this.cache.cache; }
  get users(): UserStream { return this.user.user; }
  get concepts(): ConceptStream { return this.concept.concept; }
  get identities(): IdStream { return this.identity.id; }
  get entityValues(): ValueStream { return this.entity.val; }
  get values(): ValueStream { return this.key.value; }
  get models(): ModelStream { return this.model.model; }
  get queues(): TemporalQueue { return this.queue.queue; }
  get truths(): TruthStream { return this.ssot.truth; }
  get payments(): PaymentStream<string> { return this.payment.pay; }
}
