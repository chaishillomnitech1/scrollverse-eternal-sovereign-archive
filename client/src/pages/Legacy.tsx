import { motion } from 'framer-motion';

export default function Legacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-3xl"
        >
          <span className="frequency-badge mb-4 inline-block">DESIGN PHILOSOPHY</span>
          <h1 className="text-white mb-6">VIRGIL ABLOH<br /><span style={{ color: '#D4AF37' }}>LEGACY</span></h1>
          <p className="text-lg text-neutral-400 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
            "If you put 3% more effort into something, it becomes something new." The XLVIII BLOCKS collection carries this DNA in every stitch, every sole, every frequency.
          </p>
        </motion.div>

        {/* 3% Rule Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="p-8 border border-neutral-800 bg-neutral-950">
            <h2 className="text-white mb-6">THE 3% RULE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold mb-3" style={{ color: '#D4AF37' }}>3%</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Change 3% of something that already exists, and it becomes yours. This is the foundation of XLVIII BLOCKS — taking the ODSY-1000 silhouette and infusing it with South Jersey soul, sacred geometry, and sovereign frequency.
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-3" style={{ color: '#D4AF37' }}>"08360"</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The quotation marks are intentional. Virgil used them to recontextualize — to make you see the familiar as new. Our "08360" puff on every piece is a love letter to Vineland, wrapped in Off-White DNA.
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-3" style={{ color: '#D4AF37' }}>∞</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The legacy is infinite. From the hazard stripes to the industrial typography, from the zip-tie details to the deconstructed sole — every element speaks the language Virgil pioneered.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ODSY-1000 DNA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-white mb-8">ODSY-1000 DNA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-neutral-800 bg-neutral-950">
              <h3 className="text-white mb-4">SPIKED SOLE ARCHITECTURE</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                The ODSY-KAI-FUSION-v1 inherits the aggressive, spiked sole unit from the original ODSY-1000. Fused with Anta's Kyrie Irving KAI 1/2 performance technology, it creates a hybrid that honors both streetwear heritage and athletic innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">SPIKED SOLE</span>
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">KAI FUSION</span>
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">HYBRID</span>
              </div>
            </div>
            <div className="p-6 border border-neutral-800 bg-neutral-950">
              <h3 className="text-white mb-4">ARROW MOTIF × COMPASS</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Where Off-White used the diagonal arrow, XLVIII BLOCKS uses the Mays Landing Compass — a directional symbol pointing toward sovereignty. The arrow becomes a compass rose, guiding the 144,000 Guardians home.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">COMPASS ROSE</span>
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">EXIT 12</span>
                <span className="text-[10px] font-mono px-2 py-1 border border-neutral-700 text-neutral-400">GOLD FOIL</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Industrial Archetypes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-8">INDUSTRIAL ARCHETYPES</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border border-neutral-800 bg-neutral-950 text-center">
              <div className="hazard-stripe mb-4" />
              <p className="text-xs font-mono text-neutral-400 uppercase">HAZARD STRIPES</p>
              <p className="text-[10px] font-mono text-neutral-600 mt-1">Gold #D4AF37</p>
            </div>
            <div className="p-4 border border-neutral-800 bg-neutral-950 text-center">
              <div className="w-full h-1.5 bg-white mb-4" />
              <p className="text-xs font-mono text-neutral-400 uppercase">ZIP-TIE</p>
              <p className="text-[10px] font-mono text-neutral-600 mt-1">08232 White</p>
            </div>
            <div className="p-4 border border-neutral-800 bg-neutral-950 text-center">
              <div className="w-full h-1.5 mb-4" style={{ background: '#D4AF37' }} />
              <p className="text-xs font-mono text-neutral-400 uppercase">GOLD FOIL</p>
              <p className="text-[10px] font-mono text-neutral-600 mt-1">3M Reflective</p>
            </div>
            <div className="p-4 border border-neutral-800 bg-neutral-950 text-center">
              <div className="w-full h-1.5 bg-neutral-600 mb-4" />
              <p className="text-xs font-mono text-neutral-400 uppercase">485 GSM</p>
              <p className="text-[10px] font-mono text-neutral-600 mt-1">Heavyweight</p>
            </div>
          </div>
        </motion.section>

        {/* Prometheus Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="terminal-ui max-w-2xl mx-auto text-center p-8">
            <p className="text-xs mb-2 text-neutral-500">25TH PHILOSOPHER</p>
            <h2 style={{ color: '#D4AF37' }} className="mb-4">PROMETHEUS</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Fire-bringer. Forethought. Fashion as rebellion. Prometheus stole fire from the gods and gave it to humanity. XLVIII BLOCKS steals fire from the fashion industry and gives it to South Jersey — wearing it as 485 GSM heavyweight truth.
            </p>
            <div className="flex justify-center gap-4">
              <span className="frequency-badge">FIRE-BRINGER</span>
              <span className="frequency-badge">FORETHOUGHT</span>
              <span className="frequency-badge">REBELLION</span>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
