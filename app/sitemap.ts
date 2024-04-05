import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://lavoiedubienetre.be/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/guestbook', '/massage/sportif', '/massage/relaxant', '/massage/anti-cellulite', '/massage/douceur-dorsale', '/massage/voyage-des-sens', '/shiatsu/traditionnel', '/shiatsu/amma', '/reiki' ].map((route) => ({
    url: `https://lavoiedubienetre.be${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
