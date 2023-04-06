import Tag from '../model'

describe('Tag interface', () => {
  it('should have an "id" property of type string', () => {
    const tag: Tag = { id: '123', name: 'Test' }
    expect(typeof tag.id).toBe('string')
  })

  it('should have a "name" property of type string', () => {
    const tag: Tag = { id: '123', name: 'Test' }
    expect(typeof tag.name).toBe('string')
  })
})