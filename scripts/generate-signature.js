// Run this script using: node scripts/generate-signature.js <slug>
// Example: node scripts/generate-signature.js my-new-blog-post-slug

const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

const slug = process.argv[2];

if (!slug) {
  console.error('\n❌ Please provide a blog slug!');
  console.log('Usage: node scripts/generate-signature.js <your-blog-slug>\n');
  process.exit(1);
}

const secretKey = process.env.BLOG_SECRET_KEY || 'carpet_cleaning_brisbane_secret_key_8923749823';
const signature = crypto
  .createHash('sha256')
  .update(slug + secretKey)
  .digest('hex');

console.log('\n======================================================');
console.log(`Blog Slug:  "${slug}"`);
console.log(`Signature:  "${signature}"`);
console.log('======================================================');
console.log('\nCopy the signature above into your blog post object in src/data/blogs.ts:\n');
console.log(`{`);
console.log(`  id: "3",`);
console.log(`  slug: "${slug}",`);
console.log(`  signature: "${signature}",`);
console.log(`  ...`);
console.log(`}\n`);
