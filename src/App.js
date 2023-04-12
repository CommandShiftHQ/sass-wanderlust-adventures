import {
  HiOutlineCalendarDays as Calendar,
  HiArrowRight as ArrowR,
  HiOutlineTrophy as Trophy,
  HiOutlineGlobeEuropeAfrica as Globe,
} from 'react-icons/hi2';

import { blogCardData, topSightsData } from './data';

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <div>
          <span>
            Wanderlust <Globe /> Adventures
          </span>
        </div>
        <nav>
          <a>Destinations</a>
          <a>Shop</a>
          <a>Stories</a>
        </nav>
      </header>
      <main>
        {/* HERO */}
        <section>
          <div></div>
          <img
            src='./images/hero.jpg'
            alt='Scenic Canadian Landscape'
          />
        </section>
        {/* OVERVIEW SECTION */}
        <section>
          <div>
            <h1>
              Canada<span>North America</span>
            </h1>
            <p>
              Canada is more than its hulking-mountain, craggy-coast good looks:
              it also cooks extraordinary meals, rocks cool culture, and unfurls
              wild, moose-spotting road trips.
            </p>
          </div>
          <div>
            <h2>
              Start planning your trip
            </h2>
            <div>
              <div>
                <div>
                  <Calendar />
                </div>
                <div>
                  <h5>Best Time to Visit</h5>
                  <ArrowR />
                </div>
              </div>
              <div>
                <div>
                  <Trophy />
                </div>
                <div>
                  <h5>Best Places to Visit</h5>
                  <ArrowR />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* FEATURED CARDS */}
        <section >
          <h2>01 / Top Sights & Places</h2>
          <h3>
            Unmissable <span>sights</span> for
            your itinerary
          </h3>
          <div>
            {topSightsData.map((topSight) => (
              <div>
                <img src={topSight.image.src} alt={topSight.image.alt} />
                <div >
                  <h5>{topSight.title}</h5>
                  <p>{topSight.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <a href=''>
              Discover More Places
            </a>
          </div>
        </section>
        {/* CTA BANNER */}
        <section>
          <h2>02 / Guidebooks</h2>
          <div>
            <h3>
              Purchase our award-winning guidebooks
            </h3>
            <p>
              Get to the heart of Canada with one of our in-depth, award-winning
              guidebooks, covering maps, itineraries, and expert guidance.
            </p>
            <a href=''>
              Shop Our Guidebooks
            </a>
          </div>
        </section>
        {/* FEATURED ARTICLES */}
        <section>
          <h2>03 / Articles</h2>
          <h3>
            Latest <span>stories</span> from
            Canada
          </h3>
          <div>
            {blogCardData.map((blogCard) => (
              <div>
                <div>
                  <img src={blogCard.image.src} alt={blogCard.image.alt} />
                </div>
                <div>
                  <p>{blogCard.tag}</p>
                  <h5>{blogCard.title}</h5>
                  <p>{blogCard.date}</p>
                  <p>{blogCard.overview}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <a href=''>
              Discover More Places
            </a>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer>
        <div>
          <span>
            Wanderlust <Globe /> Adventures
          </span>
        </div>
        <nav>
          <a>About Us</a>
          <a>Privacy Policy</a>
          <a>Contact Us</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
