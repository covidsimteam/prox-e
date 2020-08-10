import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NbWindowRef, NbWindowService } from '@nebular/theme';
import { CartesianCoords } from '../../../models/core/coord.model';

@Component({
  selector: 'ngx-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('networkContainer', { static: true }) networkContainer: ElementRef;

  editorCoords: CartesianCoords;
  private windowRef: NbWindowRef;

  constructor(
    // private simApi: GraphsService,
    // private visService: GraphService,
    private windowService: NbWindowService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.centerZoom();
  }

  ngOnDestroy(): void {
  }

  centerZoom() {
    this.centerGraph();
    this.zoomToFit();
  }

  nodeClicked(node: Node) {
  }

  centerGraph() {
  }

  zoomToFit() {
  }

  showNodeEditor(coords: {}, title: string) {
    const {
      top,
      left
    } = this.networkContainer.nativeElement.getBoundingClientRect();
    // this.editorCoords = {
    //   x: coords.x + left,
    //   y: coords.y + top
    // };
    // this.windowRef = this.windowService.open(EditorComponent, {
    //   title: `Edit ${title}`,
    //   context: { coords: this.editorCoords, title },
    //   viewContainerRef: this.networkContainer.nativeElement
    // });
    // this.windowRef.onClose.subscribe(_ => this.graphService.unselect());
  }

}
