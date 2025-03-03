import HeaderWidget from "@/components/HeaderWidget";
import Footer from "@/components/footer";
import BlogSlugPage from "@/modules/blog-slug";
import { getData, getDomain } from "@/lib/data";
const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;
  const domain = getDomain();
  const c = await getData();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <BlogSlugPage id={id} />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
};

export default BlogPost;
