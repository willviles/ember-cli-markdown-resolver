import { assign } from '@ember/polyfills';
import { computed, get } from '@ember/object';
import { dasherize } from '@ember/string';
import { typeOf } from '@ember/utils';

export default function(property, opts) {
  return computed(property, function() {
    let value = get(this, property);

    opts = assign({
      prefix: dasherize(property),
      values: false
    }, opts);

    if (typeOf(value) === 'string') {
      return `${opts.prefix}-${value}`;
    } else if (typeOf(value) === 'boolean') {
      return value;
    } else if (typeOf(value) === 'object') {
      if (typeOf(opts.values) === 'array') {
        return opts.values.reduce((arr, key) => {
          return value[key] ?
            [...arr, `${opts.prefix}-${key}-${value[key]}`] :
            [...arr];
        }, []).join(' ');
      } else {
        return;
      }

    }
  });

}
