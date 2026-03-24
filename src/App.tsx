import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";

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
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand/60">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
          <a href="#">
            <img src="/logo.png" alt="New Leaf Chiropractic LA" className="h-10 lg:h-12 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-bark-light">
            <a href="#services" className="hover:text-leaf transition-colors">Services</a>
            <a href="#location" className="hover:text-leaf transition-colors">Location</a>
            <a href="#about" className="hover:text-leaf transition-colors">About</a>
            <a
              href="tel:+18182359818"
              className="bg-leaf text-white px-5 py-2.5 rounded-full text-sm hover:bg-leaf-dark transition-colors"
            >
              Book Now
            </a>
          </div>
          <a
            href="tel:+18182359818"
            className="md:hidden bg-leaf text-white px-4 py-2 rounded-full text-sm"
          >
            Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-warm via-cream to-cream" />
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-xs mb-6"
            >
              Brentwood, Los Angeles
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-bark leading-[1.05] tracking-tight mb-8"
            >
              A fresh start
              <br />
              for your body.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-bark-light/80 leading-relaxed max-w-xl mb-12"
            >
              Expert chiropractic care in the heart of Brentwood.
              Hands-on treatment to relieve pain, restore mobility,
              and help you feel like yourself again.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="tel:+18182359818"
                className="bg-leaf text-white px-8 py-4 rounded-full text-base font-medium hover:bg-leaf-dark transition-colors"
              >
                Schedule Your Visit
              </a>
              <a
                href="#services"
                className="border border-bark/20 text-bark px-8 py-4 rounded-full text-base font-medium hover:bg-bark/5 transition-colors flex items-center gap-2"
              >
                View Services <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-xs mb-4"
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl lg:text-5xl text-bark tracking-tight mb-6"
            >
              Services & Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-bark-light/70 text-lg max-w-xl mb-16 leading-relaxed"
            >
              Transparent pricing. No surprises. Every session is tailored
              to your body and your goals.
            </motion.p>

            <div className="border-t border-sand">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-baseline justify-between py-6 lg:py-8 border-b border-sand group hover:bg-warm/50 px-4 -mx-4 transition-colors rounded"
                >
                  <div>
                    <h3 className="text-lg lg:text-xl text-bark font-medium">
                      {service.name}
                    </h3>
                    {service.note && (
                      <p className="text-sm text-bark-light/60 mt-1">{service.note}</p>
                    )}
                  </div>
                  <span className="font-serif text-2xl lg:text-3xl text-leaf-dark ml-8 shrink-0">
                    {service.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-bark text-white py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf-light font-medium tracking-widest uppercase text-xs mb-4"
            >
              Find Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl lg:text-5xl tracking-tight mb-16"
            >
              Wilshire West Medical Tower
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div variants={fadeUp}>
                {/* Building image placeholder */}
                <div className="aspect-[4/3] bg-bark-light/30 rounded-2xl overflow-hidden mb-8 flex items-center justify-center text-white/30 text-sm">
                  <div className="text-center">
                    <p className="text-lg mb-2">Building Photo</p>
                    <p className="text-xs text-white/20">Replace with image of Wilshire West Medical Tower</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Located inside the prestigious Wilshire West Medical Tower —
                  a recognized medical hub in the heart of Brentwood.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-10">
                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className="w-5 h-5 text-leaf-light mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-lg">11645 Wilshire Blvd</p>
                      <p className="text-white/50">Brentwood, Los Angeles, CA</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase text-leaf-light mb-4">
                    Nearby Hospitals
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li>UCLA Medical Center</li>
                    <li>St. John's Hospital</li>
                    <li>Cedars-Sinai Medical Center</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium tracking-widest uppercase text-leaf-light mb-4">
                    Easy Access
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Minutes from the 405 and 10 freeway exits.
                    Convenient for patients across the Westside and Greater LA.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-leaf-light mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-white/50 text-sm mt-1">
                      Mon – Fri: 9:00 AM – 6:00 PM
                      <br />
                      Sat: By appointment
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
      <section id="about" className="py-24 lg:py-36">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-leaf font-medium tracking-widest uppercase text-xs mb-4"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl lg:text-5xl text-bark tracking-tight mb-8"
            >
              Dr. Catherine
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-bark-light/80 text-lg leading-relaxed mb-6"
            >
              With years of experience in chiropractic care, Dr. Catherine
              founded New Leaf Chiropractic to give patients in Brentwood
              and the greater Westside access to personalized, hands-on treatment
              that addresses the root cause — not just the symptoms.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-bark-light/60 text-lg leading-relaxed"
            >
              Whether you're recovering from an injury, managing chronic pain,
              or simply looking to move and feel better, every visit is tailored
              to your needs. No cookie-cutter adjustments. No unnecessary upsells.
              Just good care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-leaf py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl lg:text-5xl text-white tracking-tight mb-6"
            >
              Ready for a fresh start?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg mb-12 max-w-md mx-auto"
            >
              Call to schedule your first visit, or stop by the
              Wilshire West Medical Tower in Brentwood.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+18182359818"
                className="bg-white text-leaf-dark px-8 py-4 rounded-full text-base font-medium hover:bg-cream transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="mailto:info@newleafchirola.com"
                className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm py-12">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-bark-light/60">
          <img src="/logo.png" alt="New Leaf Chiropractic LA" className="h-8 w-auto" />
          <p>11645 Wilshire Blvd, Brentwood, Los Angeles</p>
          <p>&copy; {new Date().getFullYear()} New Leaf Chiropractic LA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
