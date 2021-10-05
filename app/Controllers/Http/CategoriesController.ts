import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index() {
    return Category.query().orderBy('name')
  }

  public async store({ request, response }: HttpContextContract) {
    const categorySchema = schema.create({
      name: schema.string({}, [
        rules.maxLength(20),
        rules.unique({ table: 'categories', column: 'name' })
      ]),
      is_featured: schema.boolean.optional()
    })
    const payload = await request.validate({
      schema: categorySchema, messages: {
        required: 'The {{ field }} field is required.',
        'maxLength': 'The {{ field }} must not be greater than {{ options.maxLength }} characters.',
        unique: 'The {{ field }} is already exists in categories table.',
        boolean: 'The {{ field }} field must be a boolean value 0 or 1.',
      }
    })
    const category = await Category.create(payload)
    return response.status(201).send(category)
  }

  public async show({ params }: HttpContextContract) {
    return Category.findByOrFail('slug', params.slug)
  }

  public async update({ params, request }: HttpContextContract) {
      const categorySchema = schema.create({
        name: schema.string({}, [
          rules.maxLength(20),
          rules.unique({ table: 'categories', column: 'name', whereNot: {slug: params.slug } })
        ]),
        is_featured: schema.boolean.optional()
      })
      const payload = await request.validate({
        schema: categorySchema, messages: {
          required: 'The {{ field }} field is required.',
          'maxLength': 'The {{ field }} must not be greater than {{ options.maxLength }} characters.',
          unique: 'The {{ field }} is already exists in categories table.',
          boolean: 'The {{ field }} field must be a boolean value 0 or 1.'
        }
      })
      const category = await Category.findByOrFail('slug', params.slug)
      return category.merge(payload).save()
    }

  public async destroy({ params }: HttpContextContract) {
    const category = await Category.findByOrFail('slug', params.slug)
    await category.delete()
    return category
  }
}
