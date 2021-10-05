import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.get('authors', 'AuthorsController.index')

  Route.get('categories', 'CategoriesController.index')
  Route.post('categories', 'CategoriesController.store')
  Route.get('categories/:slug', 'CategoriesController.show')
  Route.patch('categories/:slug', 'CategoriesController.update')
  Route.delete('categories/:slug', 'CategoriesController.destroy')

  Route.get('posts', 'PostsController.index')
  Route.post('posts', 'PostsController.store')
  Route.get('posts/:slug', 'PostsController.show')
  Route.patch('posts/:slug', 'PostsController.update')
  Route.delete('posts/:slug', 'PostsController.destroy')

}).prefix('api')
