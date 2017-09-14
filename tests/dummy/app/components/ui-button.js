import Component from '@ember/component';
import Mixin from '@ember/object/mixin';

import AlignMixin from 'dummy/mixins/ui/align-mixin';
import ColorMixin from 'dummy/mixins/ui/color-mixin';
import DepthMixin from 'dummy/mixins/ui/depth-mixin';
import FontSizeMixin from 'dummy/mixins/ui/font-size-mixin';
import PaddingMixin from 'dummy/mixins/ui/padding-mixin';
import layout from 'dummy/templates/components/ui-button';

export let DefaultButtonMixin = Mixin.create(
  AlignMixin,
  ColorMixin,
  DepthMixin,
  FontSizeMixin,
  PaddingMixin, {

  layout,

  tagName: 'button',
  classNames: ['button'],
  classNameBindings: ['inline', 'rounded'],
  attributeBindings: ['name:data-button'],

  rounded: true
});


export default Component.extend(DefaultButtonMixin);
