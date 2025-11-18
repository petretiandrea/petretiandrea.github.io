import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export function remarkCallout() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'note' && node.name !== 'tip' && node.name !== 'warning' && node.name !== 'danger' && node.name !== 'info') {
          return;
        }

        const data = node.data || (node.data = {});
        const tagName = 'div';

        data.hName = tagName;
        data.hProperties = h(tagName, {
          class: `callout callout-${node.name}`,
          'data-callout': node.name,
        }).properties;
      }
    });
  };
}
