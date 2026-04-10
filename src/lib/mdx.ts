import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

// Ensure directory exists
export function ensureDirectoryExists() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
  }
}

export function getPostBySlug(slug: string): BlogPost {
  ensureDirectoryExists();
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  ensureDirectoryExists();
  const slugs = fs.readdirSync(contentDirectory);
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
