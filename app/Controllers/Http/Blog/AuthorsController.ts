import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthorsController {
  public async index() {
    return User
      .query()
      .select('id', 'name', 'email')
      .withCount('posts')
      .orderBy('name')
  }

  public async show({ params }: HttpContextContract) {
    return User
      .query()
      .select('id', 'name', 'email')
      .where('id', params.id)
      .preload('posts', query => {
        query
          .select('id', 'title', 'body', 'slug', 'created_at')
          .preload('categories', (query) => {
            query.select('name', 'slug')
          })
          .where('is_published', true)
          .orderBy('id', 'desc')
      })
      .withCount('posts')
      .first()
  }
}
