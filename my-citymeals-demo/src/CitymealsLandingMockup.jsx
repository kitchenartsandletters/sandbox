import { useState, useMemo } from "react";

export default function CitymealsLandingMockup() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedSet, setSelectedSet] = useState("petite");
  const donationBySet = { petite: "$25 from your purchase supports Citymeals", grand: "$50 from your purchase supports Citymeals" };

  const booksBySet = useMemo(
    () => ({
      petite: [
        {
          title: "What’s Good",
          subtitle: "Peter Hoffman",
          blurb:
            "Ingredient-driven stories and recipes from a pioneering NYC chef; a love letter to markets and seasons.",
        },
        {
          title: "Cooking with Dad, the Chef",
          subtitle: "Verveine Oringer & Ken Oringer",
          blurb:
            "A playful, heartfelt father–daughter collaboration that celebrates curiosity and the joy of cooking together.",
        },
        {
          title: "Preserving Wild Foods",
          subtitle: "Matthew Weingarten & Raquel Pelzel",
          blurb:
            "Foraging-rooted techniques and pantry craft—pickling, fermenting, and preserving with purpose.",
        },
      ],
      grand: [
        {
          title: "What’s Good",
          subtitle: "Peter Hoffman",
          blurb:
            "Ingredient-driven stories and recipes from a pioneering NYC chef; a love letter to markets and seasons.",
        },
        {
          title: "Cooking with Dad, the Chef",
          subtitle: "Verveine Oringer & Ken Oringer",
          blurb:
            "A playful, heartfelt father–daughter collaboration that celebrates curiosity and the joy of cooking together.",
        },
        {
          title: "Preserving Wild Foods",
          subtitle: "Matthew Weingarten & Raquel Pelzel",
          blurb:
            "Foraging-rooted techniques and pantry craft—pickling, fermenting, and preserving with purpose.",
        },
        {
          title: "Relae: A Book of Ideas",
          subtitle: "Christian Puglisi",
          blurb:
            "Idea essays and process windows from the acclaimed Copenhagen restaurant; creativity in service of flavor.",
        },
        {
          title: "Cooking by Hand",
          subtitle: "Paul Bertolli",
          blurb:
            "A chef's evolution through craft—charcuterie, pasta, and the philosophy of cooking well.",
        },
      ],
    }),
    []
  );

  const faqs = [
    {
      q: "Can I choose which books are included?",
      a: "No—these titles are personally selected by Chef Marc Forgione. The curation is part of the experience.",
    },
    {
      q: "Is the donation portion tax-deductible?",
      a: "Unfortunately, tax law does not allow this. If you would like to support Citymeals’ work directly, you can make a donation using the link on this page.",
    },
    {
      q: "When will I receive my order?",
      a: "Orders will ship in early November. You’ll receive an invitation to the online discussion at that time.",
    },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="container">
          <div>
            <div>KAL</div>
            <div />
            <img src="https://placehold.co/120x36?text=Citymeals" alt="Citymeals on Wheels" />
          </div>
          <nav>
            <a href="#sets">Sets</a>
            <a href="#books">Books</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div>
            <button className="btn btn-secondary">Learn More</button>
            <a href="#select" className="btn btn-primary">Choose Your Set</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="hero-content container">
          <div>
            <p>
              Limited-time • Supports Citymeals on Wheels
            </p>
            <h1>
              Treat Yourself or a Loved One to Chef Marc Forgione’s “Culinary Storytelling”  Book Collection, Exclusively Selected for Citymeals on Wheels
            </h1>
            <p>
              A limited-time offering of handpicked books from a celebrated New York City chef—supporting
              meal deliveries and companionship for homebound elderly New Yorkers.
            </p>
            <div>
              <a href="#select" className="btn btn-primary">Choose Your Set</a>
              <a href="#about" className="btn btn-secondary">About the Collaboration</a>
            </div>
          </div>
          <div className="hero-banner card">
            <div className="placeholder">Hero Banner Placeholder</div>
          </div>
        </div>
      </section>

      {/* About */}
      <div>
        <h2>A Chef's Library with a Purpose</h2>
      </div>
      <section id="about">
        <div className="container variant-grid">
          <div>
            <p>
              In partnership with Citymeals on Wheels, acclaimed chef Marc Forgione (chef-owner of Restaurant Marc Forgione,
              Peasant, and others, and a Food Network Iron Chef) has selected a set of chef- and restaurant-focused books and
              cookbooks integral to his perspective as a chef, storyteller, and food lover.
            </p>
            <p>
              For a limited time, these books are available in exclusive sets—offered with special keepsakes and a portion of
              proceeds supporting Citymeals’ mission to nourish homebound elderly New Yorkers with meal deliveries and companionship.
            </p>
            <p>
              Whether you’re adding to your own cookbook library or looking for a meaningful gift, this is a unique opportunity to own
              books personally selected by one of New York’s most respected chefs—while making a real difference in the lives of others.
            </p>
          </div>
          <div className="about-headshot">
            <img src="/forgioneHeadshot.jpg" alt="Chef Marc Forgione" />
          </div>
        </div>
      </section>

      {/* Variant Cards */}
      <section id="select">
        <div className="container section-header">
          <h2>Choose Your Set</h2>
        </div>
        <div id="sets" className="variant-grid">
          {/* Petite */}
          <article className="card">
            <header>
              <div>
                <h3>Petite Tasting Set</h3>
                <p>3 chef-selected books • Ships in standard packaging</p>
              </div>
              <div>
                <div>$94.95</div>
                <div>$25 supports Citymeals</div>
              </div>
            </header>
            <ul>
              <li>What’s Good — Peter Hoffman</li>
              <li>Cooking with Dad, the Chef — Verveine Oringer & Ken Oringer</li>
              <li>Preserving Wild Foods — Matthew Weingarten & Raquel Pelzel</li>
            </ul>
            <ul>
              <li>Signed letter from Marc Forgione</li>
              <li>Access to an exclusive online book discussion (moderated by Andrew Friedman)</li>
            </ul>
            <div>
              <button onClick={() => setSelectedSet("petite")} className="btn btn-primary">See Details</button>
              <a href="#pdp" className="btn btn-secondary">Buy Petite</a>
            </div>
          </article>

          {/* Grand */}
          <article className="card">
            <header>
              <div>
                <h3>Grand Tasting Set</h3>
                <p>5 chef-selected books • Gift-quality packaging</p>
              </div>
              <div>
                <div>$209.95</div>
                <div>$50 supports Citymeals</div>
              </div>
            </header>
            <ul>
              <li>All Petite titles plus:</li>
              <li>Relae: A Book of Ideas — Christian Puglisi</li>
              <li>Cooking by Hand — Paul Bertolli</li>
            </ul>
            <ul>
              <li>Signed letter from Marc Forgione</li>
              <li>Access to the online book discussion</li>
              <li>Citymeals-branded tote bag</li>
              <li>Gift-quality packaging</li>
            </ul>
            <p>Grand Tasting orders ship mid–late October pending special gift-box completion.</p>
            <div>
              <button onClick={() => setSelectedSet("grand")} className="btn btn-primary">See Details</button>
              <a href="#pdp" className="btn btn-secondary">Buy Grand</a>
            </div>
          </article>
        </div>
      </section>

      {/* Books teaser grid with tooltips */}
      <section id="books">
        <div className="container section-header">
          <h2>Marc’s Culinary Storytelling Collection</h2>
          <p>“These aren’t just cookbooks—they’re storybooks as well.” — Marc Forgione</p>
        </div>
        <div className="container">
          <p>
            “I love hearing about people’s journeys through food,” says Marc Forgione. The selections below blend narrative and technique;
            each title is as at home in an armchair as it is in the kitchen.
          </p>
          <div className="book-grid">
            {(selectedSet === "petite" ? booksBySet.petite : booksBySet.grand).map((b, idx) => (
              <div key={idx} className="card">
                <div className="placeholder">Cover Placeholder</div>
                <div>
                  <div>{b.title}</div>
                  <div>{b.subtitle}</div>
                  <p>{b.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDP-style section (inline mock) */}
      <section id="pdp">
        <div className="container variant-grid">
          <div className="card">
            <div className="placeholder">Lifestyle / Set Photography Placeholder</div>
            <div className="book-grid">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="placeholder" />
              ))}
            </div>
          </div>
          <div>
            <h2>Chef Marc Forgione — Culinary Storytelling Collection</h2>
            <p>In partnership with Citymeals on Wheels</p>
            <div>
              <button
                onClick={() => setSelectedSet("petite")}
                className={`btn btn-secondary${selectedSet === "petite" ? " btn-selected" : ""}`}
              >
                Petite — $94.95
              </button>
              <button
                onClick={() => setSelectedSet("grand")}
                className={`btn btn-secondary${selectedSet === "grand" ? " btn-selected" : ""}`}
              >
                Grand — $209.95
              </button>
            </div>
            <div>
              <span>{donationBySet[selectedSet]}</span>
            </div>
            <p>Ships in early November. Grand Tasting uses a special gift box.</p>
            <div>
              <button className="btn btn-primary">Add {selectedSet === "petite" ? "Petite" : "Grand"} to Cart</button>
              <button className="btn btn-secondary">Buy Now</button>
            </div>
            <div>
              <h3>What’s in the {selectedSet === "petite" ? "Petite" : "Grand"} Set</h3>
              <ul>
                {booksBySet[selectedSet].map((b, idx) => (
                  <li key={idx}><span>{b.title}</span> — {b.subtitle}</li>
                ))}
                {selectedSet === "grand" && (
                  <>
                    <li>Citymeals-branded tote bag</li>
                    <li>Gift-quality packaging</li>
                  </>
                )}
                <li>Signed letter from Marc Forgione</li>
                <li>Access to an exclusive online book discussion (moderated by Andrew Friedman)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Citymeals Block */}
      <section>
        <div className="container">
          <div className="card variant-grid">
            <div className="placeholder"><img src="/citymealsLogo.png" alt="Citymeals on Wheels Logo" /></div>
            <div>
              <h3>About Citymeals</h3>
              <p>
                Citymeals provides nourishing meals and vital companionship to older New Yorkers in need. Each year, they deliver more than two
                million meals to the city’s most vulnerable residents—right to their doors. Your purchase directly supports this work.
              </p>
              <div>
                <a href="#">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="container">
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={i} open={openFaq === i} onToggle={e => setOpenFaq(e.target.open ? i : null)}>
                <summary>
                  {f.q}
                  <span>{openFaq === i ? "–" : "+"}</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p>Final Note: This is more than a collection of cookbooks—it’s a personal glimpse into the inspirations of a celebrated chef and an opportunity to support an organization doing vital work in NYC. Quantities are limited.</p>
        </div>
      </section>

      {/* Sticky mobile bar */}
      <div>
        <div className="container">
          <div>
            <span>Selected:</span>
            <button onClick={() => setSelectedSet("petite")} className={`btn btn-secondary${selectedSet === "petite" ? " btn-selected" : ""}`}>Petite</button>
            <button onClick={() => setSelectedSet("grand")} className={`btn btn-secondary${selectedSet === "grand" ? " btn-selected" : ""}`}>Grand</button>
          </div>
          <div>
            <span>{donationBySet[selectedSet]}</span>
            <a href="#pdp" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

      {/* Footer gap */}
      <div />
    </div>
  );
}
