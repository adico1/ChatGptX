/**
 * @fileoverview Utility functions for the Tag feature in the ChatGptX Chrome Extension.
 * @author Adico
 * @license MIT
 */

import Tag from './model'

/**
 * Checks if a given tag name is valid, i.e., is a non-empty string with at most 50 characters.
 *
 * @param {string} name The name of the tag to validate.
 * @return {boolean} Whether the tag name is valid.
 */
export function isValidTagName(name: string): boolean {
  return name.trim().length > 0 && name.length <= 50
}

/**
 * Filters the tags that match the given query.
 *
 * @param {Tag[]} tags The array of tags to filter.
 * @param {string} query The query string to match.
 * @return {Tag[]} The filtered array of tags.
 */
export function filterTags(tags: Tag[], query: string): Tag[] {
  const normalizedQuery = query.toLowerCase().trim()
  return tags.filter(tag => tag.name.toLowerCase().includes(normalizedQuery))
}