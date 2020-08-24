import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ for
      <b><a href="https://covidsim.team/about-us" target="_blank">covidsim.team</a></b>
      by <a href="https://risav.dev/introducing-nepwork-ck5294zz401bvmus1p2oskup0">Risav Karna</a>
    </span>
    <div class="socials">
      <a href="https://github.com/covidsimteam" target="_blank" class="ion ion-social-github"></a>-
    </div>
  `,
})
export class FooterComponent {}
