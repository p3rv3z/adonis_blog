import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post";

export default class PostsController {
  public async index() {
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
  }

  public async show({ params }: HttpContextContract) {
    return Post
    .query()
    .select('id', 'title', 'slug', 'body', 'user_id', 'created_at')
    .where('slug', params.slug)
    .where('is_published', true)
    .preload('author', (query) => {
      query.select('name')
    })
    .preload('categories', (query) => {
      query.select('name', 'slug')
    })
    .first()
  }
}
