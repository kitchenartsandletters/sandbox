import { useState, useMemo } from "react";

export default function CitymealsLandingMockup() {
  const [selectedSet, setSelectedSet] = useState("petite");
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });
  const donationBySet = { petite: "$25 from your purchase supports Citymeals", grand: "$50 from your purchase supports Citymeals" };

  const booksBySet = useMemo(
    () => ({
      petite: [
        {
          title: "What’s Good",
          subtitle: "by Peter Hoffman",
          blurb:
            "Ingredient-driven stories and recipes from a pioneering NYC chef; a love letter to markets and seasons.",
        },
        {
          title: "Cooking with Dad, the Chef",
          subtitle: "by Verveine Oringer & Ken Oringer",
          blurb:
            "A playful, heartfelt father–daughter collaboration that celebrates curiosity and the joy of cooking together.",
        },
        {
          title: "Preserving Wild Foods",
          subtitle: "by Matthew Weingarten & Raquel Pelzel",
          blurb:
            "Foraging-rooted techniques and pantry craft—pickling, fermenting, and preserving with purpose.",
        },
      ],
      grand: [
        {
          title: "What’s Good",
          subtitle: "by Peter Hoffman",
          blurb:
            "Ingredient-driven stories and recipes from a pioneering NYC chef; a love letter to markets and seasons.",
        },
        {
          title: "Cooking with Dad, the Chef",
          subtitle: "by Verveine Oringer & Ken Oringer",
          blurb:
            "A playful, heartfelt father–daughter collaboration that celebrates curiosity and the joy of cooking together.",
        },
        {
          title: "Preserving Wild Foods",
          subtitle: "by Matthew Weingarten & Raquel Pelzel",
          blurb:
            "Foraging-rooted techniques and pantry craft—pickling, fermenting, and preserving with purpose.",
        },
        {
          title: "Relae: A Book of Ideas",
          subtitle: "by Christian Puglisi",
          blurb:
            "Idea essays and process windows from the acclaimed Copenhagen restaurant; creativity in service of flavor.",
        },
        {
          title: "Cooking by Hand",
          subtitle: "by Paul Bertolli",
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

  function handleAddToCart(set) {
    setSelectedSet(set);
    console.log(`Add to cart: ${set}`);
  }

  function handleMouseMove(e, text) {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, text });
  }

  function handleMouseLeave() {
    setTooltip({ ...tooltip, visible: false });
  }

  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="container">
          <div>
            <div />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="hero-banner container">
          <div>
            <picture>
              <source srcSet="/assets/heroBanner-mobile.png" media="(max-width: 767px)" />
              <source srcSet="/assets/heroBanner-desktop.png" media="(min-width: 768px)" />
              <img src="/assets/heroBanner-desktop.png" alt="Hero Banner" />
            </picture>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <h2>A Chef's Library with a Purpose</h2>
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
          <div className="about-headshot full-bleed">
            <img src="/assets/forgioneHeadshot.jpg" alt="Chef Marc Forgione" />
          </div>
        </div>
      </section>

            {/* Books teaser grid with tooltips */}
      <section id="books">
        <div className="container section-header">
          <h2>Marc’s Culinary Storytelling Collection</h2>
          <p><strong>“I love hearing about people’s journeys through food,” says Marc Forgione.</strong></p>
          <p>
            That sentiment flows through his book selection. From Peter Hoffman’s ingredient-inspired reminiscences to Paul Bertolli’s culinary evolution to the daughter-father dynamic shared by Verveine Origner and Ken Oringer to the “idea essays” of Christian Puglisi to Matthew Weingarten and Raquel Pelzel’s paean to foraging and the ancient craft of preserving … all of Forgione’s selections will be as at home in an armchair as they are in the kitchen. 
          </p>
          <p><strong>“These aren’t just cookbooks,” says Marc. “They’re storybooks as well.”</strong></p>
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
                <p>3 chef-selected books</p>
              </div>
              <div>
                <h4>$94.95</h4>
              </div>
            </header>
            <div className="book-grid three-books">
              {booksBySet.petite.map((b, idx) => (
                <div key={idx} className="card book-card" onMouseMove={(e) => handleMouseMove(e, b.blurb)} onMouseLeave={handleMouseLeave}>
                  {b.title === "What’s Good" ? (
                    <img src="/assets/whatsGood.jpg" alt={b.title} />
                  ) : b.title === "Cooking with Dad, the Chef" ? (
                    <img src="/assets/CookingWithMyDad.jpeg" alt={b.title} />
                  ) : b.title === "Preserving Wild Foods" ? (
                    <img src="/assets/preservingWildFoods.webp" alt={b.title} />
                  ) : (
                    <div className="placeholder">Cover Placeholder</div>
                  )}
                  <div>
                    <h4 className="book-title">
                      {b.title}
                    </h4>
                    <div>{b.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="variant-card-list">
              <li>Signed letter from Marc Forgione, sharing why he chose these titles</li>
              <li>Access to an exclusive online book discussion, moderated by Andrew Friedman, author, host/producer of the Andrew Talks to Chefs podcast, veteran cookbook collaborator, and Citymeals board member </li>
              <li>$25 from your purchase supports Citymeals</li>
              <li>Ships in standard packaging</li>
            </ul>
            <div className="foot-message">Ideal for cookbook lovers, passionate home cooks, and anyone who believes in the power of good food to connect and nourish.</div>
            <div>
              <a className="btn btn-primary" onClick={() => handleAddToCart("petite")}>Buy Petite Tasting Set</a>
            </div>
          </article>

          {/* Grand */}
          <article className="card">
            <header>
              <div>
                <h3>Grand Tasting Set</h3>
                <p>5 chef-selected books</p>
              </div>
              <div>
                <h4>$209.95</h4>
              </div>
              <div className="book-grid two-books">
                <div className="card book-card" onMouseMove={(e) => handleMouseMove(e, booksBySet.grand[3].blurb)} onMouseLeave={handleMouseLeave}>
                  <img src="/assets/relaeCover.jpg" alt="Relae: A Book of Ideas" />
                  <div>
                    <h4 className="book-title">
                      Relae: A Book of Ideas
                    </h4>
                    <div>by Christian Puglisi</div>
                  </div>
                </div>
                <div className="card book-card" onMouseMove={(e) => handleMouseMove(e, booksBySet.grand[4].blurb)} onMouseLeave={handleMouseLeave}>
                  <img src="/assets/cookingByHand.jpg" alt="Cooking by Hand" />
                  <div>
                    <h4 className="book-title">
                      Cooking by Hand
                    </h4>
                    <div>by Paul Bertolli</div>
                  </div>
                </div>
              </div>
            </header>
            <ul className="variant-card-list">
              <li>5 chef-selected book: the three books included in the Petite Tasting set as well as:
                  <li>Relae: A Book of Ideas by Christian Puglisi</li>
                  <li>Cooking by Hand by Paul Bertolli</li>
                  </li>
              <li>Signed letter from Marc Forgione</li>
              <li>Access to the online book discussion</li>
              <li>Citymeals-branded tote bag</li>
              <li>Gift-quality packaging</li>
              <li>$50 from your purchase supports Citymeals</li>
            </ul>
            <div className="foot-message">An exceptional gift—generous in its contents, presentation, and impact.</div>
            <div>
              <a className="btn btn-primary" onClick={() => handleAddToCart("grand")}>Buy Grand Tasting Set</a>
            </div>
          </article>
        </div>
      </section>

      {/* Citymeals Block */}
      <section>
        <div className="container">
          <div className="card variant-grid citymeals-card">
            <div className="citymealsLogo"><img src="/assets/citymealsLogo.png" alt="Citymeals on Wheels Logo" /></div>
            <div>
              <h3>About Citymeals</h3>
              <p className="citymeals-blurb">
                Citymeals provides nourishing meals and vital companionship to older New Yorkers in need. Each year, they deliver more than two
                million meals to the city’s most vulnerable residents—right to their doors. Your purchase directly supports this work.
              </p>
              <div>
                <a href="https://www.citymeals.org/">Learn more →</a>
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
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        <div className="final-note">
          <h2>Final Note</h2>
        </div>
          <div className="foot-message">
            <p>This is more than a collection of cookbooks. It’s a personal glimpse into the culinary inspirations of a celebrated chef—and an opportunity to support an organization doing vital work in New York City.</p>
            <p>Quantities are limited. Reserve your set while they’re available.</p>
</div>
        </div>
      </section>

      {/* Sticky mobile bar */}
      <div className="sticky-mobile-bar">
        <div className="container">
          <div>
            <button onClick={() => setSelectedSet("petite")} className={`btn btn-secondary${selectedSet === "petite" ? " btn-selected" : ""}`}>Petite Tasting</button>
            <button onClick={() => setSelectedSet("grand")} className={`btn btn-secondary${selectedSet === "grand" ? " btn-selected" : ""}`}>Grand Tasting</button>
          </div>
          <div>
            <button onClick={() => handleAddToCart(selectedSet)} className="btn btn-primary">Add to Cart</button>
            <p><span>{donationBySet[selectedSet]}</span></p>
          </div>
        </div>
      </div>
      {tooltip.visible && (
        <div
          className="book-tooltip dynamic"
          style={{ top: tooltip.y + 15, left: tooltip.x + 15 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
