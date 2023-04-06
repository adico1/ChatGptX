/**
 * @fileoverview Unit tests for the Tag utils in the ChatGptX Chrome Extension.
 * @author
 * @license MIT
 */

import { filterTags, isValidTagName } from '../utils'
import Tag from '../model'

describe('Tag Utils', () => {
  const tags: Tag[] = [
    { id: '1', name: 'JavaScript' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'React' },
    { id: '4', name: 'Vue.js' },
  ]

  describe('isValidTagName', () => {
    it('returns false for empty tag names', () => {
      expect(isValidTagName('')).toBe(false)
    })

    it('returns false for tag names longer than 50 characters', () => {
      expect(isValidTagName('a'.repeat(51))).toBe(false)
    })

    it('returns true for valid tag names', () => {
      expect(isValidTagName('JavaScript')).toBe(true)
    })
  })

  describe('filterTags', () => {
    it('returns all tags when query is empty', () => {
      expect(filterTags(tags, '')).toEqual(tags)
    })

    it('returns matching tags when query is not empty', () => {
      expect(filterTags(tags, 'java')).toEqual([{ id: '1', name: 'JavaScript' }])
      expect(filterTags(tags, 'v')).toStrictEqual([{ id: '1', name: 'JavaScript' },{ id: '4', name: 'Vue.js' }])
      expect(filterTags(tags, 'e')).toEqual([
        { id: '2', name: 'TypeScript' },
        { id: '3', name: 'React' },
        { id: '4', name: 'Vue.js' },
      ])
    })
  })
})