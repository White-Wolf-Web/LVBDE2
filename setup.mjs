import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the correct directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, 'content');

// Create the directory if it does not exist
fs.mkdir(contentDir, { recursive: true })
  .then(() => console.log('Directory ensured:', contentDir))
  .catch((error) => {
    console.error('Error ensuring directory:', error);
    process.exit(1);  // Exit with error to avoid further issues
  });

/*
// Assuming your script is running at the root of your project, adjust as necessary
/// bla bla bla
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, 'content');

fs.mkdir(contentDir, { recursive: true })
  .then(() => {
    console.log('Directory ensured:', contentDir);
    // Continue with other setup tasks
  })
  .catch(error => {
    console.error('Error ensuring directory:', error);
  });

  */
/*
const template = `---
title: 'Hello, World!'
publishedAt: '2023-01-01'
summary: 'This is your first blog post.'
---

Hello, World!`;

const homePage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is your new portfolio.
      </p>
    </section>
  );
}
`;

const workPage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is where your work experience goes.
      </p>
    </section>
  );
}
`;
*/

/*
const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};*/
/*
(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  //const contentDir = path.join(process.cwd(), 'content');
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const appDir = path.join(process.cwd(), 'app');
  const workDir = path.join(process.cwd(), 'app', 'work');

 // await deleteFolderRecursive(contentDir);
 // await deleteFolderRecursive(imagesDir);
  //await fs.mkdir(contentDir);
 // await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template);
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage);
 // await fs.writeFile(path.join(workDir, 'page.tsx'), workPage);
})();
*/