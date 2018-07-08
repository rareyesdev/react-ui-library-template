import { expect } from 'chai';
import { foo } from './converter';

describe('converter', function () {
  it('should return string \"foo\"', function () {
    const result = foo();
    expect(result).to.equal('foo');
  });
});
