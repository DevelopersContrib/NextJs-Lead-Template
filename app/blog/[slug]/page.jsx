import HeaderWidget from "@/components/HeaderWidget";
import Footer from "@/components/footer";
import { getData, getDomain } from "@/lib/data";
import { getBlogPostById } from "@/sanity/sanity-utils";

const getBlogId = (params) => {
  const id = params.split("---")[1];
  return id;
};

const parseTagsToArray = (tagsString) => {
  if (!tagsString) return [];
  return tagsString.split(",").map((tag) => tag.trim());
};

const insertTagsAfterHeadingAndImage = (content, tags) => {
  if (!tags || tags.length === 0) return content;

  const tagsHtml = `
    <div class="blog-tags tw-mt-4 tw-mb-4">
      <div class="tw-font-semibold tw-text-sm tw-text-gray-600 tw-mb-2">
        Tags
      </div>
      <ul class="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0">
        ${tags.map(tag => `
          <li class="tw-bg-gray-100 tw-px-3 tw-py-1 tw-rounded-md tw-text-sm">
            ${tag}
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  
  const h1Match = /<h1[^>]*>.*?<\/h1>/i.exec(content);
  const imgMatch = /<img[^>]*>/i.exec(content);
  
  if (h1Match && imgMatch) {
    const h1End = h1Match.index + h1Match[0].length;
    const imgEnd = imgMatch.index + imgMatch[0].length;
    const insertPosition = Math.max(h1End, imgEnd);
    
    return content.substring(0, insertPosition) + tagsHtml + content.substring(insertPosition);
  }
  
  return content;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  if (domain) {
    const post = await getBlogPostById(id, domain);

    if (post) {
      return {
        title: post.title,
        description: post.title,
      };
    }
  }
}

const BlogDetails = async ({ params }) => {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  const c = await getData();
  const post = await getBlogPostById(id, domain);
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  
  if (post) {
    const tagsList = parseTagsToArray(post.tags);
    
    const modifiedContent = insertTagsAfterHeadingAndImage(post.content, tagsList);
    
    return (
      <>
        <HeaderWidget
          domain={domain}
          piwikId={c.data.piwikId}
          accountGA={c.data.accountGA}
          adsenseClientId={c.data.adsenseClientId}
        />
        <section className="tw-min-h-screen tw-py-16">
          <div className="container animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            <div
              dangerouslySetInnerHTML={{ __html: modifiedContent }}
              className="custom-blog-content"
            />
          </div>
        </section>
        <Footer
          domain={domain}
          twitter_url={twitter_url}
          fb_url={fb_url}
          linkedin_url={linkedin_url}
        />
      </>
    );
  }
};
export default BlogDetails;
