import showdown from 'showdown';

export function initialize() {
  showdown.extension('prettify', function() {
    return [{
      type: 'output',
      filter(source) {
        return source.replace(/(<pre[^>]*>)?[\n\s]?<code([^>]*)>/gi, (match, pre, codeClass) => {
          return pre ?
            `<pre class="prettyprint linenums"><code ${codeClass}>` :
            ` <code class="prettyprint">`;
        });
      }
    }];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize
};
