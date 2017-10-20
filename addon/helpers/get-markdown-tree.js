import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Helper.extend({

  markdownResolver: service(),

  compute([tree]) {
    return get(this, 'markdownResolver')._tree(tree);
  }

});
