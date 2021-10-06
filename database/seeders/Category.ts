import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run () {
    await Category.createMany([
      {
        name: 'Technology',
        is_featured: true
      },
      {
        name: 'Programming',
        is_featured: true
      },
      {
        name: 'Sports',
        is_featured: true
      },
      {
        name: 'Life Style',
        is_featured: true
      },
      {
        name: 'Travel',
        is_featured: true
      },
      {
        name: 'Fitness',
        is_featured: true
      },
    ])
  }
}
