import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index() {
    return Post.query().preload('author').orderBy('id')
  }

  public async store({ request, response }: HttpContextContract) {
    const postSchema = schema.create({
      title: schema.string({}, [
        rules.maxLength(250),
      ]),
      body: schema.string({}, [
        rules.maxLength(1000),
      ]),
      is_published: schema.boolean.optional(),
      user_id: schema.number([
        rules.unsigned(),
        rules.exists({ table: 'users', column: 'id' })
      ]),
    })
    const payload = await request.validate({
      schema: postSchema, messages: {
        required: 'The {{ field }} field is required.',
        'maxLength': 'The {{ field }} must not be greater than {{ options.maxLength }} characters.',
        exists: 'The {{ field}} should be exist in users table.',
        boolean: 'The {{ field }} field must be a boolean value 0 or 1.',
      }
    })
    const post = await Post.create(payload)
    return response.status(201).send(post)
  }

  public async show({ params }: HttpContextContract) {
    return Post.findByOrFail('slug', params.slug)
  }

  public async update({ params, request }: HttpContextContract) {
      const postSchema = schema.create({
        title: schema.string({}, [
          rules.maxLength(250),
        ]),
        body: schema.string({}, [
          rules.maxLength(1000),
        ]),
        is_published: schema.boolean.optional(),
        user_id: schema.number([
          rules.unsigned(),
          rules.exists({ table: 'users', column: 'id' })
        ]),
      })
      const payload = await request.validate({
        schema: postSchema, messages: {
          required: 'The {{ field }} field is required.',
          'maxLength': 'The {{ field }} must not be greater than {{ options.maxLength }} characters.',
          exists: 'The {{ field}} should be exist in users table.',
          boolean: 'The {{ field }} field must be a boolean value 0 or 1.'
        }
      })
      const post = await Post.findByOrFail('slug', params.slug)
      return post.merge(payload).save()
    }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findByOrFail('slug', params.slug)
    await post.delete()
    return post
  }
}
