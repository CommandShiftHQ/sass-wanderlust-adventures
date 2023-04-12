import {
  HiOutlineCalendarDays as Calendar,
  HiArrowRight as ArrowR,
  HiOutlineTrophy as Trophy,
  HiOutlineGlobeEuropeAfrica as Globe,
} from 'react-icons/hi2';

import { blogCardData, topSightsData } from './data'

function App() {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <div className='header__logo'>
          <span className='logo'>
            Wanderlust <Globe /> Adventures
          </span>
        </div>
        <nav className='navigation'>
          <a className='navigation__link'>Destinations</a>
          <a className='navigation__link'>Shop</a>
          <a className='navigation__link'>Stories</a>
        </nav>
      </header>
      <main>
        {/* HERO */}
        <section className='hero'>
          <div className='hero__overlay'></div>
          <img
            className='hero__image'
            src='./images/hero.jpg'
            alt='Scenic Canadian Landscape'
          />
        </section>
        {/* OVERVIEW SECTION */}
        <section className='overview'>
          <div className='overview--left'>
            <h1 className='overview__title'>
              Canada<span>North America</span>
            </h1>
            <p className='overview__description'>
              Canada is more than its hulking-mountain, craggy-coast good looks:
              it also cooks extraordinary meals, rocks cool culture, and unfurls
              wild, moose-spotting road trips.
            </p>
          </div>
          <div className='overview--right'>
            <h2 className='overview__card-group-title'>
              Start planning your trip
            </h2>
            <div className='overview__card-group'>
              <div className='card card--bg-primary card--small'>
                <div className='card__header'>
                  <Calendar />
                </div>
                <div className='card__footer'>
                  <h5>Best Time to Visit</h5>
                  <ArrowR />
                </div>
              </div>
              <div className='card card--bg-secondary card--small'>
                <div className='card__header'>
                  <Trophy />
                </div>
                <div className='card__footer'>
                  <h5>Best Places to Visit</h5>
                  <ArrowR />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* FEATURED CARDS */}
        <section className='featured-strip'>
          <h2 className='section-title'>01 / Top Sights & Places</h2>
          <h3 className='featured-strip__title'>
            Unmissable <span className='text-color--secondary'>sights</span> for
            your itinerary
          </h3>
          <div className='featured-strip__card-list'>
            {topSightsData.map((topSight) => (
              <div className='card card--bg-img'>
                <img src={topSight.image.src} alt={topSight.image.alt} />
                <div className='card__footer'>
                  <h5>{topSight.title}</h5>
                  <p>{topSight.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='featured-strip__footer'>
            <a href='' className='button button--secondary'>
              Discover More Places
            </a>
          </div>
        </section>
        {/* CTA BANNER */}
        <section className='cta-banner'>
          <h2 className='section-title'>02 / Guidebooks</h2>
          <div className='cta-banner__content'>
            <h3 className='cta-banner__title'>
              Purchase our award-winning guidebooks
            </h3>
            <p className='cta-banner__description'>
              Get to the heart of Canada with one of our in-depth, award-winning
              guidebooks, covering maps, itineraries, and expert guidance.
            </p>
            <a href='' className='button button--accent'>
              Shop Our Guidebooks
            </a>
          </div>
        </section>
        {/* FEATURED ARTICLES */}
        <section className='featured-strip'>
          <h2 className='section-title'>03 / Articles</h2>
          <h3 className='featured-strip__title'>
            Latest <span className='text-color--primary'>stories</span> from
            Canada
          </h3>
          <div className='featured-strip__card-list'>
            {blogCardData.map((blogCard) => (
              <div className='card card--blog'>
                <div className='card__image-wrapper'>
                  <img src={blogCard.image.src} alt={blogCard.image.alt} />
                </div>
                <div className='blog-summary'>
                  <p className='blog-summary__tag'>{blogCard.tag}</p>
                  <h5 className='blog-summary__title'>
                    {blogCard.title}
                  </h5>
                  <p className='blog-summary__date'>
                    {blogCard.date}
                  </p>
                  <p className='blog-summary__overview'>
                    {blogCard.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='featured-strip__footer'>
            <a href='' className='button button--primary'>
              Discover More Places
            </a>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className='footer'>
        <div className='footer__logo'>
          <span className='logo logo--small'>
            Wanderlust <Globe /> Adventures
          </span>
        </div>
        <nav className='navigation navigation--small'>
          <a className='navigation__link'>About Us</a>
          <a className='navigation__link'>Privacy Policy</a>
          <a className='navigation__link'>Contact Us</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
