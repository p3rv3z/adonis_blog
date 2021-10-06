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

  Route.group(() => {
    Route.get('home/posts', 'HomePageController.posts')
    Route.get('home/authors', 'HomePageController.authors')

    Route.get('posts', 'PostsController.index')
    Route.get('posts/:slug', 'PostsController.show')

    Route.get('authors', 'AuthorsController.index')
    Route.get('authors/:id', 'AuthorsController.show')
  })
  .prefix('blog').namespace('App/Controllers/Http/Blog')

}).prefix('api')
