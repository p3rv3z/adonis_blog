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
        userId: 3,
      },
      {
        title: 'Dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 4,
      },
      {
        title: 'Orem ipsum dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 5,
      },
      {
        title: 'Jpsum dolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 6,
      },
      {
        title: 'Kit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 2,
      },
      {
        title: 'Nolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 4,
      },
      {
        title: 'Rolor sit amet, consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est eu justo auctor, ac pharetra purus sodales. Integer scelerisque at tellus a lobortis. Aenean gravida ultrices ornare.',
        is_published: true,
        userId: 1,
      },
    ])


  }
}
