import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Check, Mail, Calendar, Quote } from "lucide-react";

/* ============================================================
   CLIO ACADEMY — full site (single-file component)
   Global styles live in src/index.css
   ============================================================ */

/* ---------- little building blocks ---------- */
const GLYPH = "M2 2 H18 V18 H6 V6 H14 V14 H10 V10";

function Glyph({ cls = "glyph" }) {
  return (
    <svg className={cls} viewBox="0 0 20 20" aria-hidden="true">
      <path d={GLYPH} />
    </svg>
  );
}

function Rule({ left = false }) {
  return (
    <div className={`rule${left ? " left" : ""}`}>
      <div className="ln" />
      <Glyph />
      <div className="ln" />
    </div>
  );
}

function Eyebrow({ children, dark = false }) {
  return <span className={`eyebrow${dark ? " on-dark" : ""}`}>{children}</span>;
}

function Btn({ children, variant = "primary", onClick, arrow = false, dark = false }) {
  return (
    <button className={`btn btn--${variant}${dark ? " on-dark" : ""}`} onClick={onClick}>
      {children}
      {arrow && <ArrowRight />}
    </button>
  );
}

const NAV = [
  ["tuition", "Tuition"],
  ["topics", "OCR Topics"],
  ["gcse", "GCSE Taster"],
  ["resources", "Resources"],
  ["about", "About"],
  ["safeguarding", "Safeguarding"],
];

function Nav({ page, go }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <button className="logo" onClick={() => { go("home"); setOpen(false); }} aria-label="Clio Academy home">
          <svg className="mark" viewBox="0 0 20 20" aria-hidden="true"><path d={GLYPH} /></svg>
          <span className="word">Clio<small>Academy</small></span>
        </button>
        <div className="nav-links">
          {NAV.map(([k, label]) => (
            <button key={k} className={page === k ? "active" : ""} onClick={() => go(k)}>{label}</button>
          ))}
        </div>
        <div className="nav-cta desktop">
          <Btn variant="gold" onClick={() => go("contact")}>Book a consultation</Btn>
        </div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV.map(([k, label]) => (
            <button key={k} onClick={() => { go(k); setOpen(false); }}>{label}</button>
          ))}
          <button className="btn btn--gold mm-cta" onClick={() => { go("contact"); setOpen(false); }}>Book a consultation</button>
        </div>
      )}
    </nav>
  );
}

function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="word">Clio Academy</div>
            <p style={{ marginTop: 16, fontSize: 14, color: "rgba(246,241,231,0.62)", maxWidth: 320 }}>
              Specialist 1:1 online tuition for OCR A Level Ancient History (H407). Greece and Rome, taught by recent top candidates.
            </p>
            <div style={{ marginTop: 18 }}><Rule left /></div>
          </div>
          <div>
            <h4>Explore</h4>
            <button onClick={() => go("tuition")} style={ftLink}>Tuition</button>
            <button onClick={() => go("topics")} style={ftLink}>OCR H407 Topics</button>
            <button onClick={() => go("gcse")} style={ftLink}>GCSE Taster</button>
            <button onClick={() => go("resources")} style={ftLink}>Resources</button>
          </div>
          <div>
            <h4>Academy</h4>
            <button onClick={() => go("about")} style={ftLink}>About</button>
            <button onClick={() => go("safeguarding")} style={ftLink}>Safeguarding &amp; Standards</button>
            <button onClick={() => go("contact")} style={ftLink}>Contact &amp; Booking</button>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Clio Academy. Independent OCR Ancient History tuition.</span>
          <span>Not affiliated with or endorsed by OCR.</span>
        </div>
      </div>
    </footer>
  );
}
const ftLink = { display: "block", color: "rgba(246,241,231,0.68)", fontSize: 14, padding: "6px 0", background: "none", border: "none", textAlign: "left", cursor: "pointer" };

/* =========================================================
   PAGES
   ========================================================= */

function Home({ go }) {
  return (
    <div className="page-enter" key="home">
      {/* HERO */}
      <header className="hero">
        <div className="wrap col">
          <Eyebrow>OCR A Level Ancient History · H407</Eyebrow>
          <h1 className="display carve">Ancient History,<br />taught to the top.</h1>
          <p className="lede sub">
            Specialist 1:1 online tuition for OCR A Level Ancient History. We focus on Greece and Rome — the
            sources, the essays, and the exam technique that separate an A from an A* — taught by recent top
            candidates who know the paper from the inside.
          </p>
          <div className="cta-row">
            <Btn variant="gold" arrow onClick={() => go("contact")}>Book a consultation</Btn>
            <Btn variant="ghost" onClick={() => go("tuition")}>Explore tuition</Btn>
          </div>
          <div className="hero-foot"><Rule left /></div>
        </div>
      </header>

      {/* CREDIBILITY STRIP */}
      <div className="creds">
        <div className="wrap creds-in">
          {["Harrow School", "Incoming — Dartmouth College", "Top Ancient History Prize", "OCR H407 Specialist"].map((c, i) => (
            <React.Fragment key={c}>
              {i > 0 && <span className="cred-dot" />}
              <span className="cred">{c}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center">
            <div className="center" style={{ marginBottom: 26 }}><Rule /></div>
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="serif">A demanding subject, rarely taught in depth</h2>
            <p>
              Few schools offer Ancient History, and fewer still have a specialist to teach it. Bright students are
              often left to master a difficult, source-heavy A Level with thin support and little tailored material.
            </p>
          </div>
          <div className="grid g3">
            {[
              ["Sources, not narration", "Examiners reward candidates who analyse and evaluate ancient evidence in support of an argument. Most lose marks by naming a source and simply retelling the story."],
              ["Argument under pressure", "The papers demand substantiated judgement — a clear line of reasoning held across a timed essay. It is a skill that has to be taught and practised, not assumed."],
              ["Breadth and scarcity", "From Athens to the Julio-Claudians, the content is vast and unfamiliar, and quality resources aimed squarely at the OCR spec are hard to find."],
            ].map(([t, d]) => (
              <div className="card" key={t}>
                <span className="kw">Where marks go</span>
                <h3 className="serif">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="sec bg-parch2">
        <div className="wrap">
          <div className="split">
            <div>
              <Eyebrow>The Clio approach</Eyebrow>
              <h2 className="serif">Taught by someone who sat the paper — and topped it</h2>
              <p className="muted" style={{ fontSize: 17, marginBottom: 24 }}>
                Clio Academy is near-peer specialist tuition: not a generic tutor, but a recent top candidate who
                understands the OCR exam from the inside and knows exactly where students lose marks — and how to
                win them back.
              </p>
              <ul className="tick">
                {["Content mastery across your Greek and Roman topics",
                  "Source analysis and evaluation, drilled properly",
                  "Essay planning, argument, and substantiated judgement",
                  "Marked written feedback between every lesson",
                  "Exam technique tuned to the H407 mark scheme"].map(li => (
                  <li key={li}><Check />{li}</li>
                ))}
              </ul>
              <div style={{ marginTop: 30 }}><Btn variant="primary" arrow onClick={() => go("tuition")}>How tuition works</Btn></div>
            </div>
            <div className="plate">
              <Eyebrow dark>At a glance</Eyebrow>
              <h3 className="serif" style={{ color: "var(--parchment)", marginBottom: 22 }}>1:1 online tuition</h3>
              <div className="kv"><span>Format</span><span>1:1 live video</span></div>
              <div className="kv"><span>Default session</span><span>Weekly · 60 minutes</span></div>
              <div className="kv"><span>Included</span><span>Marked essay feedback</span></div>
              <div className="kv"><span>Focus</span><span>Greece &amp; Rome (H407)</span></div>
              <div className="kv"><span>Rate</span><span>£60 / hour</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>What we teach</Eyebrow>
            <h2 className="serif">Focused on the topics we know best</h2>
            <p>Clio Academy specialises rather than spreading thin. Students are screened for topic fit before booking, so every hour is taught with genuine depth.</p>
          </div>
          <TopicGrid />
          <div className="center" style={{ marginTop: 40 }}>
            <Btn variant="ghost" onClick={() => go("topics")}>See full topic coverage</Btn>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="sec bg-ink">
        <div className="wrap">
          <div className="sec-head">
            <Eyebrow dark>The method</Eyebrow>
            <h2 className="serif">Every lesson, built to move the grade</h2>
            <p>A repeatable structure that turns unfamiliar material into confident, well-argued answers.</p>
          </div>
          <MethodSteps />
        </div>
      </section>

      {/* PRICING */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="serif">Premium, specialist tuition</h2>
            <p>One clear rate. No packages you don't need — just focused teaching and real feedback.</p>
          </div>
          <div className="price-card">
            <div className="amt">£60<span> / hour</span></div>
            <ul className="tick">
              {["Weekly 60-minute 1:1 online lessons",
                "Content teaching and exam strategy",
                "Source evaluation and essay technique",
                "Marked written work between sessions",
                "Progress tracked against the mark scheme"].map(li => <li key={li}><Check />{li}</li>)}
            </ul>
            <Btn variant="gold" arrow onClick={() => go("contact")}>Book a consultation</Btn>
            <p className="integ">Lesson packages available on request.</p>
          </div>
        </div>
      </section>

      {/* GCSE */}
      <section className="sec bg-parch2">
        <div className="wrap">
          <div className="split">
            <div className="plate">
              <Eyebrow dark>Considering the subject?</Eyebrow>
              <h3 className="serif" style={{ color: "var(--parchment)", fontSize: 30, marginBottom: 16 }}>GCSE taster sessions</h3>
              <p style={{ color: "rgba(246,241,231,0.82)", fontSize: 16 }}>
                An introduction to Ancient History for GCSE students weighing up their A Level options — a real taste
                of Greece, Rome, ancient sources, and the way historians think.
              </p>
              <div style={{ marginTop: 26 }}><Btn variant="gold" arrow dark onClick={() => go("gcse")}>Explore the taster</Btn></div>
            </div>
            <div>
              <Eyebrow>Is it right for you?</Eyebrow>
              <h2 className="serif">See the subject before you choose it</h2>
              <p className="muted" style={{ fontSize: 17 }}>
                Ancient History is one of the most rewarding A Levels — and one of the least understood at GCSE. A
                taster session shows you what studying it is actually like, honestly and vividly, so you can commit
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>In their words</Eyebrow>
            <h2 className="serif">What students and parents say</h2>
          </div>
          <div className="grid g3">
            {[
              ["The difference in her essays after a term was remarkable — she finally understood how to use the sources rather than just describe them.", "Parent of an Upper Sixth student"],
              ["I went from feeling lost with the Julio-Claudians to genuinely enjoying the exam. The feedback on my essays was the thing that changed everything.", "Lower Sixth student"],
              ["Clear, patient, and clearly brilliant on the subject. Worth every penny for a course our school couldn't fully support.", "Parent of an A Level candidate"],
            ].map(([q, by]) => (
              <div className="tcard" key={by}>
                <Quote className="q" />
                <p>{q}</p>
                <span className="by">— {by}</span>
              </div>
            ))}
          </div>
          <div className="center"><span className="ph-note">Sample testimonials — replace with real ones before launch</span></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-parch2">
        <div className="narrow">
          <div className="sec-head center">
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="serif">Frequently asked</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="cband">
            <Eyebrow dark>Begin</Eyebrow>
            <h2 className="serif">Ready to master the ancient world?</h2>
            <p>Book a short consultation to talk through your topics, your goals, and how Clio Academy can help.</p>
            <Btn variant="gold" arrow onClick={() => go("contact")}>Book a consultation</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

function TopicGrid() {
  const T = [
    ["Greek", "Relations between Greek states", "492–404 BC", "The Persian Wars, the rise of Athenian power, and the descent into the Peloponnesian War — the compulsory Greek period study, taught through its sources."],
    ["Greek", "The Politics and Culture of Athens", "c. 460–399 BC", "Democracy, empire, and Athenian society at its height and its crisis — the depth study that rewards precise use of evidence and scholarship."],
    ["Roman", "The Julio-Claudian Emperors", "31 BC–AD 68", "From Augustus to Nero: power, succession, and the sources that shape how we read the first imperial dynasty — the compulsory Roman period study."],
    ["Roman", "The Flavians", "AD 68–96", "Vespasian, Titus, and Domitian: the rebuilding of Rome after civil war, told through Tacitus, Suetonius, Josephus, and the monuments themselves."],
  ];
  return (
    <div className="grid g2">
      {T.map(([tag, name, dates, d]) => (
        <div className="topic" key={name}>
          <div className="band" />
          <span className="tag">{tag} · OCR H407</span>
          <h3 className="serif">{name}</h3>
          <div className="dates">{dates}</div>
          <p style={{ marginTop: 12 }}>{d}</p>
        </div>
      ))}
    </div>
  );
}

function MethodSteps() {
  const S = [
    ["Content mastery", "We build genuine command of the topic — the events, figures, and context — filling the gaps a stretched school course often leaves."],
    ["Source analysis", "We drill the prescribed sources: what each says, its value and its limitations, and how to weave evaluation into analysis rather than bolting it on."],
    ["Argument & essay", "We turn a question into a clear line of argument with substantiated judgement — the exact quality examiners say is most often missing."],
    ["Timed practice", "We rehearse under exam conditions, so technique holds up against the clock and the pressure of an unseen question."],
    ["Marked feedback", "Written work is marked against the mark scheme between lessons, with specific next steps — the loop that actually raises grades."],
  ];
  return (
    <div>
      {S.map(([t, d], i) => (
        <div className="step" key={t}>
          <div className="num">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <h3 className="serif">{t}</h3>
            <p>{d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen(!open)}>
        {q}<ChevronDown />
      </button>
      <div className={`faq-a${open ? " open" : ""}`}><p>{a}</p></div>
    </div>
  );
}

function FAQ() {
  const Q = [
    ["Do you cover the whole OCR Ancient History spec?", "No — deliberately. Clio Academy specialises in a focused set of Greek and Roman topics so that every lesson is taught with real depth. We'll always confirm your exact OCR options before booking, and tell you honestly if we're not the right fit."],
    ["How much does tuition cost?", "£60 per hour, for weekly 60-minute 1:1 online lessons that include content teaching, source and essay technique, exam strategy, and marked written feedback. Lesson packages are available on request."],
    ["Is this for struggling students or top students?", "Both. We help students who find the subject hard to build confidence and structure, and we help strong students push from an A towards an A* through sharper argument and source work."],
    ["Do you mark essays?", "Yes — marked written feedback between lessons is a core part of the service, not an add-on. It's usually the single thing that moves a grade the most."],
    ["Are lessons online?", "Yes. All tuition is delivered 1:1 over live video, with a shared space for sources, essay plans, and marked work."],
    ["Can GCSE students try Ancient History?", "Yes. We offer taster sessions for GCSE students considering the A Level — a genuine introduction to Greece, Rome, and the way the subject is studied."],
    ["How do you handle safeguarding?", "We work professionally with under-18 students: parental consent is required, lessons run through business accounts, and we don't contact students on social media. See our Safeguarding & Standards page for detail."],
    ["How do I book?", "Start with a short consultation. Tell us your year group, school, and OCR topics through the contact page, and we'll arrange a time to talk through how we can help."],
  ];
  return <div className="faq">{Q.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}</div>;
}

/* ---------- ABOUT ---------- */
function About({ go }) {
  return (
    <div className="page-enter" key="about">
      <PageHead eyebrow="About" title="Scholarship, taught with precision" sub="Why Clio Academy exists, and the person behind it." />
      <section className="sec-sm">
        <div className="narrow">
          <h2 className="serif">A subject that deserves better support</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            Ancient History is one of the most intellectually rich A Levels a student can take — and one of the
            hardest to get real help with. Few schools offer it; fewer have a specialist to teach it well. Good
            tutors are rare, and material built for the OCR specification is scarce. Clio Academy exists to close
            that gap: to give ambitious students the depth, the technique, and the feedback the subject demands.
          </p>

          <div style={{ margin: "44px 0" }}><Rule left /></div>

          <Eyebrow>The near-peer advantage</Eyebrow>
          <h2 className="serif">Taught from inside the exam</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            The tuition is led by a recent top candidate in the subject — someone who sat these exact papers, knows
            precisely where marks are won and lost, and can teach the reasoning behind a top answer rather than just
            the content. That closeness to the exam is the whole point: current, credible, and honest about what
            actually works.
          </p>

          <div className="plate" style={{ margin: "36px 0 44px" }}>
            <Eyebrow dark>Credentials</Eyebrow>
            <div className="kv"><span>School</span><span>Harrow School</span></div>
            <div className="kv"><span>Grade</span><span>Predicted A* (Ancient History)</span></div>
            <div className="kv"><span>Recognition</span><span>Harrow prize — top Ancient History candidate</span></div>
            <div className="kv"><span>Role</span><span>Head of Archaeology</span></div>
            <div className="kv"><span>Writing</span><span>Prize-winning essayist</span></div>
            <div className="kv"><span>Next</span><span>Incoming student, Dartmouth College</span></div>
          </div>

          <Eyebrow>The name</Eyebrow>
          <h2 className="serif">Why "Clio Academy"</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            Clio was the Greek Muse of history — the keeper of record and remembrance. "Academy" recalls the school
            Plato founded outside Athens, and the ideal of structured, serious learning. Together they name what we
            do: history taught with rigour, and with a genuine love of the ancient world.
          </p>

          <div style={{ margin: "44px 0" }}><Rule left /></div>

          <Eyebrow>Teaching philosophy</Eyebrow>
          <h2 className="serif">Argument, sources, precision, judgement</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            Every lesson comes back to four things: a clear argument, evidence used well, precision in how it's
            expressed, and judgement that's earned rather than asserted. Master those, and the grade follows.
          </p>
          <div style={{ marginTop: 30 }}><Btn variant="primary" arrow onClick={() => go("contact")}>Book a consultation</Btn></div>
        </div>
      </section>
    </div>
  );
}

/* ---------- TUITION ---------- */
function Tuition({ go }) {
  return (
    <div className="page-enter" key="tuition">
      <PageHead eyebrow="Tuition" title="1:1 tuition, built around the exam" sub="Focused lessons, real feedback, and a clear path to a better grade." />
      <section className="sec-sm">
        <div className="wrap">
          <div className="split">
            <div>
              <Eyebrow>Who it's for</Eyebrow>
              <h2 className="serif">Lower and Upper Sixth students</h2>
              <p className="muted" style={{ fontSize: 17 }}>
                For any student taking OCR A Level Ancient History who wants specialist support — whether you're
                finding the subject difficult and need structure, or you're strong and pushing for an A*. Lessons are
                tailored to your topics, your school's pace, and your goals.
              </p>
            </div>
            <div className="plate">
              <Eyebrow dark>The essentials</Eyebrow>
              <div className="kv"><span>Format</span><span>1:1 live online video</span></div>
              <div className="kv"><span>Default</span><span>Weekly · 60 minutes</span></div>
              <div className="kv"><span>Rate</span><span>£60 / hour</span></div>
              <div className="kv"><span>Feedback</span><span>Marked work between lessons</span></div>
              <div className="kv"><span>Packages</span><span>Available on request</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-parch2">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>Inside a lesson</Eyebrow>
            <h2 className="serif">What a typical session covers</h2>
          </div>
          <MethodSteps />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid g3">
            {[
              ["Source evaluation", "We work through the prescribed ancient sources until you can judge their value and limits and use them as evidence — the skill the mark scheme rewards most."],
              ["Essay planning", "We turn questions into arguments: a thesis, a structure, and a judgement you can defend under timed conditions."],
              ["Exam technique", "We rehearse pace, question choice, and how to answer the specific H407 question types with confidence."],
            ].map(([t, d]) => (
              <div className="card" key={t}><span className="kw">Core skill</span><h3 className="serif">{t}</h3><p>{d}</p></div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 46 }}>
            <div className="price-card">
              <div className="amt">£60<span> / hour</span></div>
              <p className="muted" style={{ margin: "16px 0 24px" }}>Weekly 1:1 online tuition with marked written feedback included.</p>
              <Btn variant="gold" arrow onClick={() => go("contact")}>Book a consultation</Btn>
              <p className="integ">Lesson packages available on request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- TOPICS ---------- */
function Topics({ go }) {
  return (
    <div className="page-enter" key="topics">
      <PageHead eyebrow="OCR H407" title="Topic coverage" sub="The Greek and Roman options we teach — and why focus is a strength." />
      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>Greek world</Eyebrow>
            <h2 className="serif">Greece</h2>
          </div>
          <div className="grid g2">
            {[
              ["Relations between Greek states", "492–404 BC", "The compulsory Greek period study: the Persian Wars, the growth of the Athenian empire, and the road to the Peloponnesian War — taught through its literary and material sources."],
              ["The Politics and Culture of Athens", "c. 460–399 BC", "The Athenian depth study: democracy, empire, religion, and society, and the sources and scholarship that let you argue about them with precision."],
            ].map(([n, dt, d]) => (
              <div className="topic" key={n}><div className="band" /><span className="tag">Greek period / depth study</span><h3 className="serif">{n}</h3><div className="dates">{dt}</div><p style={{ marginTop: 12 }}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-parch2">
        <div className="wrap">
          <div className="sec-head center">
            <Eyebrow>Roman world</Eyebrow>
            <h2 className="serif">Rome</h2>
          </div>
          <div className="grid g2">
            {[
              ["The Julio-Claudian Emperors", "31 BC–AD 68", "The compulsory Roman period study: Augustus, Tiberius, Gaius, Claudius, and Nero — power and succession read through Tacitus, Suetonius, and Cassius Dio."],
              ["The Flavians", "AD 68–96", "The Roman depth study: Vespasian, Titus, and Domitian, and the rebuilding of Rome after civil war — told through the historians and the monuments alike."],
            ].map(([n, dt, d]) => (
              <div className="topic" key={n}><div className="band" /><span className="tag">Roman period / depth study</span><h3 className="serif">{n}</h3><div className="dates">{dt}</div><p style={{ marginTop: 12 }}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="narrow center">
          <Eyebrow>Why specialise</Eyebrow>
          <h2 className="serif">Depth beats breadth</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            OCR Ancient History offers several routes, and no single tutor can teach every one of them brilliantly.
            Clio Academy chooses depth: we teach the topics we know inside out, so your hours are spent with someone
            who truly commands the material. Before you book, we'll confirm your exact OCR options and only take you
            on if we're the right fit — because your grade matters more than our booking.
          </p>
          <div style={{ marginTop: 30 }}><Btn variant="primary" arrow onClick={() => go("contact")}>Check your topic fit</Btn></div>
        </div>
      </section>
    </div>
  );
}

/* ---------- GCSE ---------- */
function Gcse({ go }) {
  return (
    <div className="page-enter" key="gcse">
      <PageHead eyebrow="GCSE Taster" title="Discover Ancient History" sub="For GCSE students weighing up their A Level choices." />
      <section className="sec-sm">
        <div className="narrow">
          <h2 className="serif">See what the subject is really like</h2>
          <p className="muted" style={{ fontSize: 17 }}>
            Choosing A Levels is hard when you've never studied a subject before. A taster session gives GCSE
            students a genuine introduction to Ancient History — the world of Greece and Rome, the thrill of reading
            ancient sources, and the way historians build arguments about the distant past. Exciting, but honest:
            you'll leave knowing whether it's the right subject for you.
          </p>
          <div style={{ margin: "40px 0" }}><Rule left /></div>
          <div className="grid g2">
            {[
              ["Greece & Rome", "A vivid tour of the periods you'd study — from Athenian democracy to the emperors of Rome."],
              ["Ancient sources", "Try reading a real ancient source the way an A Level student does, and see how much it reveals."],
              ["Thinking like a historian", "A first taste of argument, evidence, and judgement — the heart of the A Level."],
              ["An honest picture", "What the course involves, how it's assessed, and what makes it rewarding and demanding."],
            ].map(([t, d]) => (
              <div className="card" key={t}><span className="kw">In the taster</span><h3 className="serif">{t}</h3><p>{d}</p></div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}><Btn variant="gold" arrow onClick={() => go("contact")}>Enquire about a taster</Btn></div>
        </div>
      </section>
    </div>
  );
}

/* ---------- RESOURCES ---------- */
function Resources({ go }) {
  return (
    <div className="page-enter" key="resources">
      <PageHead eyebrow="Resources" title="A growing library, built for H407" sub="Specialist material designed around the OCR Ancient History specification." />
      <section className="sec-sm">
        <div className="wrap">
          <div className="sec-head center">
            <p className="muted" style={{ fontSize: 17 }}>
              We're building a library of resources aimed squarely at the OCR spec. Materials below are in
              development — students of Clio Academy will receive them as part of their tuition.
            </p>
          </div>
          <div className="grid g3">
            {[
              ["Source booklets", "The prescribed ancient sources, gathered by topic with guided evaluation."],
              ["Model essays", "Annotated top-band answers that show why they score — not just what to write."],
              ["Essay planning guides", "Frameworks for turning any question into a clear, argued response."],
              ["Timelines", "Clear chronologies for each period, from the Persian Wars to the Flavians."],
              ["Knowledge organisers", "Concise, high-yield notes for revision and quick reference."],
              ["Exam technique guides", "How to read, choose, and answer each H407 question type under time."],
            ].map(([t, d]) => (
              <div className="card" key={t}>
                <span className="kw" style={{ color: "var(--gold-deep)" }}>Coming soon</span>
                <h3 className="serif">{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 42 }}>
            <span className="ph-note">Resource downloads to be added · available to enrolled students</span>
            <div style={{ marginTop: 26 }}><Btn variant="ghost" onClick={() => go("contact")}>Ask about student resources</Btn></div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- SAFEGUARDING ---------- */
function Safeguarding() {
  return (
    <div className="page-enter" key="safeguarding">
      <PageHead eyebrow="Safeguarding & Standards" title="A safe, professional space to learn" sub="How Clio Academy works with students under 18." />
      <section className="sec-sm">
        <div className="narrow">
          <p className="muted" style={{ fontSize: 17 }}>
            Clio Academy works with young people, and their safety and wellbeing come first. We hold ourselves to
            clear professional standards, and we're always happy to talk parents through them before any lessons
            begin.
          </p>
          <div style={{ margin: "36px 0 8px" }}><Rule left /></div>
          <ul className="tick" style={{ marginTop: 24 }}>
            {[
              "We work professionally with students under 18, with a parent or guardian involved throughout.",
              "Parental consent is required before tuition begins.",
              "Lessons are conducted through business accounts on established video platforms — never personal ones.",
              "We do not contact students through social media or private messaging.",
              "Communication and scheduling follow clear, agreed norms, with parents kept informed.",
              "Student information is handled carefully and privately, in line with data-protection good practice.",
            ].map(li => <li key={li} style={{ fontSize: 16.5 }}><Check />{li}</li>)}
          </ul>

          <div className="plate" style={{ margin: "40px 0" }}>
            <Eyebrow dark>In place / on request</Eyebrow>
            <h3 className="serif" style={{ color: "var(--parchment)", marginBottom: 14 }}>Policies &amp; checks</h3>
            <p style={{ color: "rgba(246,241,231,0.82)", fontSize: 15.5 }}>
              A written safeguarding policy is available to parents on request. Background (DBS) and safeguarding
              checks are being arranged in line with current official guidance for those working with children, and
              we're glad to confirm their status with families directly.
            </p>
          </div>

          <p className="muted" style={{ fontSize: 14 }}>
            This page describes our commitments and practice. It is not legal advice, and specific arrangements are
            confirmed with each family before tuition begins.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------- CONTACT ---------- */
// Bookings are emailed to clionotes.academy@gmail.com via Formspree.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzjnldd";

function Contact() {
  const [f, setF] = useState({ name: "", email: "", role: "Parent", year: "Lower Sixth", school: "", topics: "", concerns: "", time: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async () => {
    if (!f.name || !f.email) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Clio Academy consultation request — ${f.name}`,
          name: f.name,
          email: f.email,
          role: f.role,
          year_group: f.year,
          school: f.school,
          ocr_topics: f.topics,
          concerns: f.concerns,
          preferred_time: f.time,
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page-enter" key="contact">
      <PageHead eyebrow="Contact & Booking" title="Book a consultation" sub="Tell us about the student, and we'll arrange a time to talk." />
      <section className="sec-sm">
        <div className="wrap">
          <div className="split" style={{ alignItems: "flex-start" }}>
            <div>
              <Eyebrow>What happens next</Eyebrow>
              <h2 className="serif">A short, no-pressure conversation</h2>
              <p className="muted" style={{ fontSize: 17 }}>
                Share a few details and we'll be in touch to arrange a consultation. We'll confirm your OCR topics,
                talk through where you'd like to improve, and agree how tuition could work — before you commit to
                anything.
              </p>
              <ul className="tick" style={{ marginTop: 20 }}>
                {["We confirm your exact OCR options and fit",
                  "We agree goals, cadence, and timing",
                  "You decide whether to go ahead"].map(li => <li key={li}><Check />{li}</li>)}
              </ul>
              <div style={{ marginTop: 28 }}>
                <p className="muted" style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}><Calendar size={16} style={{ color: "var(--gold)" }} /> Scheduling via Calendly — to be connected.</p>
                <p className="muted" style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}><Mail size={16} style={{ color: "var(--gold)" }} /> Payments via Stripe — to be connected.</p>
              </div>
            </div>

            <div className="form">
              {status === "sent" ? (
                <div className="sent">
                  <h3 className="serif">Thank you</h3>
                  <p className="muted" style={{ margin: 0 }}>Your enquiry has been sent. We'll reply by email to arrange a consultation time.</p>
                  <div style={{ marginTop: 18 }}><Btn variant="ghost" onClick={() => setStatus("idle")}>Send another</Btn></div>
                </div>
              ) : (
                <div>
                  <div className="two">
                    <div className="field"><label>Name</label><input value={f.name} onChange={set("name")} placeholder="Your name" /></div>
                    <div className="field"><label>Email</label><input value={f.email} onChange={set("email")} placeholder="you@email.com" /></div>
                  </div>
                  <div className="two">
                    <div className="field"><label>You are a</label>
                      <select value={f.role} onChange={set("role")}><option>Parent</option><option>Student</option><option>Other</option></select>
                    </div>
                    <div className="field"><label>Year group</label>
                      <select value={f.year} onChange={set("year")}><option>Lower Sixth</option><option>Upper Sixth</option><option>GCSE (taster)</option><option>Other</option></select>
                    </div>
                  </div>
                  <div className="field"><label>School</label><input value={f.school} onChange={set("school")} placeholder="School name" /></div>
                  <div className="field"><label>OCR topics studied</label><input value={f.topics} onChange={set("topics")} placeholder="e.g. Athens · The Julio-Claudians" /></div>
                  <div className="field"><label>Current concerns / goals</label><textarea value={f.concerns} onChange={set("concerns")} placeholder="What would you like to improve?" /></div>
                  <div className="field"><label>Preferred session time</label><input value={f.time} onChange={set("time")} placeholder="e.g. weekday evenings" /></div>
                  <button className="btn btn--gold" style={{ width: "100%", justifyContent: "center" }} onClick={submit} disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Request a consultation"}<ArrowRight />
                  </button>
                  {status === "error" && (
                    <p className="integ" style={{ color: "var(--gold-deep)" }}>
                      Please fill in at least your name and email, or the form isn't connected yet — see README.md.
                    </p>
                  )}
                  <p className="integ">Sent directly to clionotes.academy@gmail.com.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* shared page header */
function PageHead({ eyebrow, title, sub }) {
  return (
    <header className="hero" style={{ padding: "84px 0 66px" }}>
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display carve" style={{ fontSize: "clamp(34px,5vw,58px)" }}>{title}</h1>
        {sub && <p className="lede" style={{ marginTop: 20, maxWidth: 640 }}>{sub}</p>}
        <div style={{ marginTop: 34 }}><Rule left /></div>
      </div>
    </header>
  );
}

/* =========================================================
   APP
   ========================================================= */
export default function App() {
  const [page, setPage] = useState("home");
  const go = (p) => setPage(p);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [page]);

  const pages = {
    home: <Home go={go} />,
    about: <About go={go} />,
    tuition: <Tuition go={go} />,
    topics: <Topics go={go} />,
    gcse: <Gcse go={go} />,
    resources: <Resources go={go} />,
    safeguarding: <Safeguarding />,
    contact: <Contact />,
  };

  return (
    <div className="ca-root">
      <Nav page={page} go={go} />
      {pages[page]}
      <Footer go={go} />
    </div>
  );
}
