'use strict';

require('chai').should();

describe('hexo-renderer-jade', () => {
  const pug = require('../lib/pug');

  // Pug test cases
  it('pug - default', () => {
    const result = pug({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('pug - compile', () => {
    const render = pug.compile({
      text: 'p Hello #{name}'
    });

    const result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });
});
