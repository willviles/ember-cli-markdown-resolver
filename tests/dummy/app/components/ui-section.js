import Component from '@ember/component';
import Mixin from '@ember/object/mixin';

import AlignMixin from 'dummy/mixins/ui/align-mixin';
import ColorMixin from 'dummy/mixins/ui/color-mixin';
import DepthMixin from 'dummy/mixins/ui/depth-mixin';
import FontSizeMixin from 'dummy/mixins/ui/font-size-mixin';
import PaddingMixin from 'dummy/mixins/ui/padding-mixin';

export const DefaultSectionBaseLayer = Mixin.create(
  AlignMixin,
  ColorMixin,
  DepthMixin,
  FontSizeMixin,
  PaddingMixin, {

  classNames: ['section'],
  name: ''

})

export default Component.extend(DefaultSectionBaseLayer, {
  tagName: 'section',
  attributeBindings: ['name:data-section']

});
