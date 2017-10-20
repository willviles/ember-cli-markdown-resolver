import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Helper.extend({

  markdownResolver: service(),

  compute([tree, file]) {
    return get(this, 'markdownResolver')._file(tree, file);
  }

});
