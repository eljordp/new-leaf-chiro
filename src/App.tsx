import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown, Menu, X, Heart, Shield, Star, Users, Award, Leaf, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  { name: "Initial Encounter", price: "$120", note: "Comprehensive first visit" },
  { name: "Established Patient Adjustment", price: "$100", note: "Full body adjustment" },
  { name: "MRT / Soft Tissue Massage", price: "$60", note: "Per hour" },
  { name: "Cupping Therapy", price: "$50", note: "15 minutes" },
  { name: "Graston Scraping", price: "$45", note: "10 minutes" },
  { name: "Spinal Decompression", price: "$120", note: "Per hour" },
  { name: "Flexion Distraction", price: "$60", note: null },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand/60">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-12">
          <a href="#">
            <img src="/logo.png" alt="New Leaf Chiropractic LA" className="h-8 sm:h-10 lg:h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-bark-light">
            <a href="#services" className="hover:text-leaf transition-colors">Services</a>
            <a href="#conditions" className="hover:text-leaf transition-colors">Conditions</a>
            <a href="#location" className="hover:text-leaf transition-colors">Location</a>
            <a href="#about" className="hover:text-leaf transition-colors">About</a>
            <a
              href="tel:+18182359818"
              className="bg-leaf text-white px-5 py-2.5 rounded-full text-sm hover:bg-leaf-dark transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-bark"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-cream border-t border-sand/60"
            >
              <div className="flex flex-col px-4 py-4 gap-4">
                <a href="#services" onClick={() => setMenuOpen(false)} className="text-bark-light text-base py-2">Services</a>
                <a href="#conditions" onClick={() => setMenuOpen(false)} className="text-bark-light text-base py-2">Conditions</a>
                <a href="#location" onClick={() => setMenuOpen(false)} className="text-bark-light text-base py-2">Location</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="text-bark-light text-base py-2">About</a>
                <a
                  href="tel:+18182359818"
                  className="bg-leaf text-white text-center px-5 py-3 rounded-full text-base font-medium"
                >
                  Call (818) 235-9818
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-warm via-cream to-cream" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-4 sm:mb-6"
            >
              Brentwood, Los Angeles
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl xl:text-8xl text-bark sm:leading-[1.05] tracking-tight mb-5 sm:mb-8"
            >
              A fresh start
              <br />
              for your body.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-bark-light/80 leading-relaxed max-w-xl mb-8 sm:mb-12"
            >
              Expert chiropractic care in the heart of Brentwood.
              Hands-on treatment to relieve pain, restore mobility,
              and help you feel like yourself again.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+18182359818"
                className="bg-leaf text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-medium hover:bg-leaf-dark transition-colors text-center"
              >
                Schedule Your Visit
              </a>
              <a
                href="#services"
                className="border border-bark/20 text-bark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-medium hover:bg-bark/5 transition-colors flex items-center justify-center gap-2"
              >
                View Services <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bark tracking-tight mb-4 sm:mb-6"
            >
              Services & Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-bark-light/70 text-base sm:text-lg max-w-xl mb-10 sm:mb-16 leading-relaxed"
            >
              Transparent pricing. No surprises. Every session is tailored
              to your body and your goals.
            </motion.p>

            <div className="border-t border-sand">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-baseline justify-between py-4 sm:py-6 lg:py-8 border-b border-sand group hover:bg-warm/50 px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors rounded"
                >
                  <div className="min-w-0 mr-4">
                    <h3 className="text-base sm:text-lg lg:text-xl text-bark font-medium">
                      {service.name}
                    </h3>
                    {service.note && (
                      <p className="text-xs sm:text-sm text-bark-light/60 mt-0.5 sm:mt-1">{service.note}</p>
                    )}
                  </div>
                  <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-leaf-dark shrink-0">
                    {service.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section id="conditions" className="bg-warm py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
            >
              What We Treat
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bark tracking-tight mb-4 sm:mb-6"
            >
              Conditions We Treat
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-bark-light/70 text-base sm:text-lg max-w-xl mb-10 sm:mb-16 leading-relaxed"
            >
              From spinal injuries to chronic pain, we treat a wide range
              of conditions with hands-on care tailored to your recovery.
            </motion.p>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-5">
              {[
                "Herniated Discs",
                "Spinal Stenosis",
                "Posture Issues",
                "Extremity Pain",
                "Back Pain",
                "Neck Pain",
                "Sciatica",
                "Arthritis",
                "Sports Injuries",
                "Headaches & Migraines",
                "Scoliosis",
                "Joint Dysfunction",
              ].map((condition, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-leaf shrink-0" />
                  <span className="text-bark text-sm sm:text-base font-medium">{condition}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Homeopathic Remedies — Differentiator */}
      <section id="remedies" className="py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
              <div>
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-leaf/10 text-leaf px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  What Sets Us Apart
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bark tracking-tight mb-6 sm:mb-8"
                >
                  Homeopathic
                  <br />
                  FDA-Approved Remedies
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-bark-light/80 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
                >
                  Unlike other clinics, Dr. Catherine handcrafts FDA-approved
                  homeopathic tinctures, salves, and herbal supplements — giving
                  patients a natural path to healing alongside chiropractic care.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-bark-light/60 text-base sm:text-lg leading-relaxed"
                >
                  These remedies support treatment for a variety of conditions
                  and complement your in-office care with at-home relief.
                </motion.p>
              </div>

              <motion.div variants={fadeUp}>
                <div className="bg-warm rounded-xl sm:rounded-2xl p-6 sm:p-10">
                  <h3 className="font-serif text-xl sm:text-2xl text-bark mb-6 sm:mb-8">
                    Remedies Available For
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      { name: "PCOS", type: "Tinctures & Supplements" },
                      { name: "Arthritis", type: "Salves & Tinctures" },
                      { name: "Diabetes Support", type: "Herbal Supplements" },
                      { name: "Back Pain", type: "Salves & Topicals" },
                      { name: "Inflammation", type: "Tinctures & Supplements" },
                      { name: "Chronic Pain", type: "Full Remedy Line" },
                    ].map((remedy, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-sand/60 last:border-0">
                        <span className="text-bark font-medium text-sm sm:text-base">{remedy.name}</span>
                        <span className="text-bark-light/50 text-xs sm:text-sm ml-4">{remedy.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-bark text-white py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf-light font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
            >
              Find Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-10 sm:mb-16"
            >
              Wilshire West Medical Tower
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
              <motion.div variants={fadeUp}>
                {/* Building photo */}
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
                  <img
                    src="/building.jpg"
                    alt="Wilshire West Medical Tower - 11645 Wilshire Blvd, Brentwood"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Located inside the prestigious Wilshire West Medical Tower —
                  a recognized medical hub in the heart of Brentwood.
                </p>

                {/* Google Maps Embed */}
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3!2d-118.4715!3d34.0485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb8c4e4b6d5f%3A0x4e3f0e8e8b8b8b8b!2s11645%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090025!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New Leaf Chiropractic LA location"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-8 sm:space-y-10">
                <div>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <MapPin className="w-5 h-5 text-leaf-light mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-base sm:text-lg">11645 Wilshire Blvd</p>
                      <p className="text-white/50 text-sm sm:text-base">Brentwood, Los Angeles, CA</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-leaf-light mb-3 sm:mb-4">
                    Nearby Hospitals
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                    <li>UCLA Medical Center</li>
                    <li>St. John's Hospital</li>
                    <li>Cedars-Sinai Medical Center</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-leaf-light mb-3 sm:mb-4">
                    Easy Access
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    Minutes from the 405 and 10 freeway exits.
                    Convenient for patients across the Westside and Greater LA.
                  </p>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock className="w-5 h-5 text-leaf-light mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Hours</p>
                    <p className="text-white/50 text-xs sm:text-sm mt-1">
                      Mon – Fri: 9:00 AM – 6:00 PM
                      <br />
                      Sat: 8:00 AM – 3:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
              <motion.div variants={fadeUp}>
                <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src="/catherine.jpg"
                    alt="Dr. Catherine Shegolevskaya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-leaf font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
                >
                  About
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bark tracking-tight mb-6 sm:mb-8"
                >
                  Dr. Catherine
                  <br />
                  Shegolevskaya
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-bark-light/80 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6"
                >
                  Dr. Catherine Shegolevskaya founded New Leaf Chiropractic to provide
                  high-quality, patient-centered care that promotes healing. She delivers
                  compassionate, evidence-based treatment that prioritizes patient experience,
                  safety, and satisfaction in every visit.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-bark-light/60 text-base sm:text-lg leading-relaxed"
                >
                  Whether you're recovering from an injury, managing chronic pain,
                  or simply looking to move and feel better, every visit is tailored
                  to your needs. Clinical excellence, attentive listening, and ethical
                  practice guide every adjustment.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section id="values" className="bg-warm py-16 sm:py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-[10px] sm:text-xs mb-3 sm:mb-4"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bark tracking-tight mb-12 sm:mb-16"
            >
              Mission, Vision & Values
            </motion.h2>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <motion.div variants={fadeUp}>
                <h3 className="font-serif text-xl sm:text-2xl text-bark mb-4">Our Mission</h3>
                <p className="text-bark-light/70 text-sm sm:text-base leading-relaxed">
                  To provide high-quality, patient-centered care that promotes healing.
                  We deliver compassionate, evidence-based medical services that prioritize
                  patient experience, safety, and satisfaction. We promote clinical excellence,
                  attentive listening, and ethical practice to improve the health of every
                  patient that comes in through the door.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="font-serif text-xl sm:text-2xl text-bark mb-4">Our Vision</h3>
                <p className="text-bark-light/70 text-sm sm:text-base leading-relaxed">
                  To be a trusted healthcare practice known for exceptional patient care,
                  clinical excellence, and meaningful relationships. We aspire to create an
                  environment where patients feel respected, informed, and empowered in their
                  healthcare journey. Our team continuously grows in skill, professionalism,
                  and dedication to service.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div variants={fadeUp}>
              <h3 className="font-serif text-xl sm:text-2xl text-bark mb-6 sm:mb-8">Our Values</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Heart, title: "Patient-Centered Care", desc: "We place patients at the heart of everything we do, respecting their needs, preferences, and individuality." },
                  { icon: Shield, title: "Medical Integrity & Ethics", desc: "We practice honesty, responsibility, and transparency in all clinical interactions." },
                  { icon: Star, title: "Excellence", desc: "We maintain the highest standards of medical care, clinical skill, and professionalism." },
                  { icon: Award, title: "Compassion", desc: "We treat every patient, family member, and colleague with compassion, kindness, and dignity." },
                  { icon: Users, title: "Teamwork", desc: "We foster an environment that enhances communication, efficiency, and patient outcomes." },
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <value.icon className="w-5 h-5 text-leaf mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-bark font-medium text-sm sm:text-base mb-1.5">{value.title}</h4>
                      <p className="text-bark-light/60 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-leaf py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 sm:mb-6"
            >
              Ready for a fresh start?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 max-w-md mx-auto"
            >
              Call to schedule your first visit, or stop by the
              Wilshire West Medical Tower in Brentwood.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="tel:+18182359818"
                className="bg-white text-leaf-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-medium hover:bg-cream transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call (818) 235-9818
              </a>
              <a
                href="mailto:newleafchirola@gmail.com"
                className="border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between text-sm text-bark-light/60">
          <img src="/logo.png" alt="New Leaf Chiropractic LA" className="h-7 sm:h-8 w-auto" />
          <p className="text-center md:text-left">11645 Wilshire Blvd, Brentwood, Los Angeles</p>
          <p>&copy; {new Date().getFullYear()} New Leaf Chiropractic LA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
