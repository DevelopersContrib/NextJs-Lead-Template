
import ScriptLoader from '../../components/ScriptLoader'
import { getData, getDomain, getTopsites, getScript } from '../../lib/data';
import HeaderWidget from '../../components/HeaderWidget';
import Footer from '../../components/footer';

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const topDomains = await getTopsites();
  const background = c.data.background_url!==undefined && c.data.background_url!==null?c.data.background_url:'https://cdn.vnoc.com/background/tech4.jpg';
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/"+domain;
  const html = "<script id='referral-script' src='https://www.referrals.com/extension/widget.js?key=356' type='text/javascript'></script>";
  return (
    <>
      <HeaderWidget domain={domain} piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <ScriptLoader html={html} />
      <Footer domain={domain} twitter_url={twitter_url} fb_url={twitter_url} linkedin_url={linkedin_url}/>
    </>

  )
}

export default page