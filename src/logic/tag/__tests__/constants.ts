import { MAX_TAG_NAME_LENGTH } from '../constants';

describe('Tag Constants', () => {
  it('should export MAX_TAG_NAME_LENGTH constant', () => {
    expect(MAX_TAG_NAME_LENGTH).toBeDefined();
  });

  it('should have MAX_TAG_NAME_LENGTH equal to 50', () => {
    expect(MAX_TAG_NAME_LENGTH).toEqual(50);
  });
});