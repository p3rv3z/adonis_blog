import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'


export default class CategoryPostSeeder extends BaseSeeder {
  public async run () {
    await Database
      .table('category_post')
      .multiInsert([
        { category_id: 1, post_id:  6},
        { category_id: 2, post_id:  5},
        { category_id: 3, post_id:  4},
        { category_id: 4, post_id:  3},
        { category_id: 5, post_id:  2},
        { category_id: 6, post_id:  1},
        { category_id: 1, post_id:  1},
        { category_id: 2, post_id:  2},
        { category_id: 3, post_id:  3},
        { category_id: 4, post_id:  4},
        { category_id: 5, post_id:  5},
        { category_id: 6, post_id:  6},
        { category_id: 3, post_id:  7},
        { category_id: 4, post_id:  8},
        { category_id: 5, post_id:  9},
      ])
  }
}
