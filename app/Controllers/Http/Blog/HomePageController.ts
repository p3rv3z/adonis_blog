// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";
import User from "App/Models/User";

export default class HomeController {
  public async posts() {
    return Post
      .query()
      .select('id', 'title', 'slug', 'body', 'user_id', 'created_at')
      .where('is_published', true)
      .preload('author', (query) => {
        query.select('name')
      })
      .preload('categories', (query) => {
        query.select('name', 'slug')
      })
      .orderBy('created_at', 'desc')
      .limit(6)
  }

  public async authors() {
    return User
      .query()
      .select('id', 'name', 'email')
      .withCount('posts')
      .orderBy('posts_count', 'desc')
      .limit(6)
  }
}
