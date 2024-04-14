

export default async function sitemap() {


  let routes = ['', '/massage/sportif', '/massage/relaxant', '/massage/anti-cellulite', '/massage/douceur-dorsale', '/massage/voyage-des-sens', '/shiatsu/traditionnel', '/shiatsu/amma', '/reiki', '/massage/reflexologie-plantaire' ].map((route) => ({
    url: `https://lavoiedubienetre.be${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
