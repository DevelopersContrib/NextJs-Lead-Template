import {
  faBriefcase,
  faCogs,
  faCoins,
  faHandshake,
  faUserCog,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Container from "../components/Container";
import WhyJoinUsIsometric from "../components/WhyJoinUsIsometric";
import Footer from "../components/footer";
import HeaderWidget from "../components/HeaderWidget";
import Logo from "../components/logo";
import Notification from "../components/notification/Notification";
import ScriptLoader from "../components/ScriptLoader";
import TopDomainsComponent from "../components/TopDomainsComponent";
import { getData, getDomain, getScript, getTopsites } from "../lib/data";
import BlogList from "./blog/components/BlogList";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const topDomains = await getTopsites();
  const background =
    c.data.background_url !== undefined && c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const description = c.data.description;
  const title = c.data.title;
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );

  return (
    <>
      {/* <Navigation /> */}
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <Notification />
      <section
        id="hero"
        className="hero-wrap tw-text-white"
        style={{ backgroundImage: `url('${background}')` }}
      >
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-content text-center mx-auto">
            <span className="hero-badge">Join the community</span>
            <Logo domain={domain} logo={c.data.logo} />
            <h1 className="hero-title text-capitalize">{title}</h1>
            <p className="hero-description">{description}</p>
            <div className="home-hero-form-box text-center mx-auto">
              <p className="hero-cta-headline">Get early access</p>
              <p className="hero-cta-subtext">Join the community. No spam—unsubscribe anytime.</p>
              <Container domain={domain} />
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          Scroll
        </div>
      </section>
      <section id="why-us" className="home-section" aria-label="Why join us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-5 mb-xl-0">
              <div className="home-why-us-image">
                <WhyJoinUsIsometric />
              </div>
            </div>
            <div className="col-xl-6">
              <span className="section-label">Why join us</span>
              <div className="home-why-us-content">
                <h2 className="section-title mb-4">Follow, Build, and Help Launch</h2>
                <p className="text-secondary mb-3">
                  Follow {domain} and other great ventures on the Contrib platform.
                </p>
                <p className="text-secondary mb-3">
                  Build {domain} and Help cofound a relevant new Startup, Part-Time.
                </p>
                <p className="text-secondary mb-4">
                  Launch {domain} and you could be front and center in the process. Launch {domain}{" "}
                  with us today!
                </p>
                <a
                  href={follow_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-cta-btn"
                >
                  Follow {domain}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="home-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <span className="section-label">The team</span>
              <div className="title-center-circle">
                <h2 className="section-title text-uppercase">
                  {domain} team
                </h2>
              </div>
              <p className="section-subtitle mx-auto">
                Our awesome team that helps you make the right choice.
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-xl-4">
              <h3 className="tw-font-bold mb-4 text-secondary" style={{ fontSize: "1.1rem" }}>
                Small, diverse, and passionate about what we do.
              </h3>
              <div className="home-team-card home-team-card-accent tw-mb-4 tw-mt-8">
                <h4 className="home-team-card-title">Our Team</h4>
                <div className="home-team-card-icon-wrap">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="text-secondary">
                  <strong>{domain}</strong> is a bit different than most startups. We are small,
                  diverse team working remotely and loving what we do. We only cowork with others
                  who also have this same passion.
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xl-6">
                  <div className="home-team-card home-team-card-accent tw-mb-6 md:tw-mb-8 tw-mt-6 md:tw-mt-8">
                    <h4 className="home-team-card-title">How We Work</h4>
                    <div className="home-team-card-icon-wrap">
                      <FontAwesomeIcon icon={faUserCog} />
                    </div>
                    <div className="text-secondary">
                      <strong>{domain}</strong> seeks to contract and hire the best people and then
                      trust them: it&apos;s the thinking behind the work at their own time policy.
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="home-team-card home-team-card-accent tw-mb-4">
                    <h4 className="home-team-card-title">What We Value</h4>
                    <div className="home-team-card-icon-wrap">
                      <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div className="text-secondary">
                      The <strong>{domain}</strong> team loves building things and focus on being
                      the most productive individual, not the amount of time spent in the office.
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-secondary">
                We put a lot of effort into making {domain} a fun place to work for people who like
                getting things done. So if you&apos;re game with this then enter your email address
                and be a part of the global team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopDomainsComponent domains={topDomains} />
      <section id="blog" className="home-section home-blog-section bg-light">
        <BlogList />
      </section>
      <section id="platform" className="home-section">
        <div className="container">
          <div className="row mb-4 text-center">
            <div className="col-12">
              <span className="section-label">Platform</span>
              <h2 className="section-title">Ways to contribute</h2>
              <p className="section-subtitle mx-auto mb-0">
                Join the marketplace, contribute your skills, or explore crypto projects.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 col-xl-4 mb-4">
              <div className="home-platform-card d-flex align-items-start">
                <div className="home-platform-icon-wrap">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div>
                  <h5 className="home-platform-card-title">Contrib Marketplace</h5>
                  <p className="mb-0 text-secondary small">Browse Jobs, Ideas and Micro Tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4">
              <div className="home-platform-card d-flex align-items-start">
                <div className="home-platform-icon-wrap">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div>
                  <h5 className="home-platform-card-title">Contribute</h5>
                  <p className="mb-0 text-secondary small">
                    Contribute using your skills, services, apps and/or capital.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 mb-4">
              <div className="home-platform-card d-flex align-items-start">
                <div className="home-platform-icon-wrap">
                  <FontAwesomeIcon icon={faCoins} />
                </div>
                <div>
                  <h5 className="home-platform-card-title">Crypto Marketplace</h5>
                  <p className="mb-0 text-secondary small">Contribute to blockchain projects on premium urls today.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="home-stats-card" role="region" aria-label="Platform stats">
                <div className="row gy-4">
                  <div className="col-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
                    <span className="stat-number tw-text-2xl md:tw-text-3xl">5,250</span>
                    <span className="tw-text-sm text-secondary">Members</span>
                  </div>
                  <div className="col-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
                    <span className="stat-number tw-text-2xl md:tw-text-3xl">310</span>
                    <span className="tw-text-sm text-secondary">Campaigns</span>
                  </div>
                  <div className="col-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
                    <span className="stat-number tw-text-2xl md:tw-text-3xl">395</span>
                    <span className="tw-text-sm text-secondary">Rewards given</span>
                  </div>
                  <div className="col-6 col-xl-3 d-flex flex-column align-items-center justify-content-center text-center">
                    <span className="stat-number tw-text-2xl md:tw-text-3xl">3.6M+</span>
                    <span className="tw-text-sm text-secondary">Impressions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ScriptLoader html={html} />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
