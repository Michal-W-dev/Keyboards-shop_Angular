import { Component } from '@angular/core';

@Component({
  selector: 'bs-col',
  template: `<div class="col">
               <ng-content></ng-content>
             </div>`,
})
export class ColComponent { }
