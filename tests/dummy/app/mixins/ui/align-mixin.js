import Mixin from '@ember/object/mixin';

import propertyClassNameBinding from 'dummy/utils/property-class-name-binding';

export default Mixin.create({

  classNameBindings: ['_align'],

  align: false,
  _align: propertyClassNameBinding('align')

});
