// lib/articles.js
import postsJson from '../lib/posts.json';

export function getPosts() {
  return postsJson.posts; // Devuelve los posts del archivo JSON
}
