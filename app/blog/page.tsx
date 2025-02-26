
import Ai from "@/components/Ai";
import Footer from "@/components/footer";
import HeaderWidget from "@/components/HeaderWidget";
import ScriptLoader from "@/components/ScriptLoader";
import { getData, getDomain, getScript } from "@/lib/data";
import BlogList from "./components/BlogList";

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );
  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <BlogList />
      <Ai />
      <ScriptLoader html={html} />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
};

export default page;
