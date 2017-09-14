import Mixin from '@ember/object/mixin';
import LinkComponent from '@ember/routing/link-component';

import { DefaultButtonMixin } from 'dummy/components/ui-button';

export let LinkToButtonMixin = Mixin.create(
  DefaultButtonMixin, {
  classNames: ['btn-link-to']
});

export default LinkComponent.extend(LinkToButtonMixin);
