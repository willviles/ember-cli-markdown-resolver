import Component from '@ember/component';

import { DefaultButtonMixin } from 'dummy/components/ui-button';

const ButtonLinkComponent = Component.extend(
  DefaultButtonMixin, {

  tagName: 'a',
  classNames: ['btn-link'],
  attributeBindings: ['target', 'href']
});

ButtonLinkComponent.reopenClass({
  positionalParams: ['linkTitle']
});

export default ButtonLinkComponent;
