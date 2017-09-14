import Mixin from '@ember/object/mixin';

import propertyClassNameBinding from 'dummy/utils/property-class-name-binding';

export default Mixin.create({

  classNameBindings: ['_padding'],

  padding: false,
  _padding: propertyClassNameBinding('padding', {
    values: ['top', 'right', 'bottom', 'left']
  })

});
