import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CategoryPost extends BaseSchema {
  protected tableName = 'category_post'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('category_id')
        .unsigned()
        .references('categories.id')
        .onDelete('cascade')

      table
      .integer('post_id')
      .unsigned()
      .references('posts.id')
      .onDelete('cascade')

      table.unique(['category_id', 'post_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
