import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<tree-root [nodes]="nodes"></tree-root>`,
  styles: []
})
export class AppComponent {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    }];
}
