import Mixin from '@ember/object/mixin';

import propertyClassNameBinding from 'dummy/utils/property-class-name-binding';

export default Mixin.create({

  classNameBindings: ['_bg', '_bgHover', '_color', '_colorHover'],

  bg: false,
  _bg: propertyClassNameBinding('bg'),

  bgHover: false,
  _bgHover: propertyClassNameBinding('bgHover'),

  color: false,
  _color: propertyClassNameBinding('color'),

  colorHover: false,
  _colorHover: propertyClassNameBinding('colorHover')

});
