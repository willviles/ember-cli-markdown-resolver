import { computed } from '@ember/object';

export default function computedFallbackAction(fallback) {
  return computed({
    get() {
      return fallback.bind(this);
    },
    set(_, v) {
      return v === undefined ? fallback.bind(this) : v;
    }
  });
}
