import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run() {
    await Post.createMany([
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 1,
      },
      {
        title: 'Ipsum dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 2,
      },
      {
        title: 'Sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 2,
      },
      {
        title: 'Dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 3,
      },
    ])
  }
}
