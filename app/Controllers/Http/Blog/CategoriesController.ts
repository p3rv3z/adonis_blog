import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async show({ params }: HttpContextContract) {
    return Category
    .query()
    .where('slug', params.slug)
    .select('id', 'name')
    .withCount('posts')
    .preload('posts', (query) => {
      query
          .where('is_published', true)
          .select('id', 'title', 'body', 'slug', 'user_id', 'created_at')
          .preload('author', (query) => {
            query.select('name')
          })
          .orderBy('created_at', 'desc')
    })
    .first()
  }
}
