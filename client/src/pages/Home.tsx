import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const colorways = [
  { id: 'blk', name: 'Black Night Eclipse', hex: '#000000', skuCode: 'BLK', border: '#333333' },
  { id: 'sage', name: 'Sage Resonance', hex: '#7A8B7B', skuCode: 'SAGE', border: '#7A8B7B' },
  { id: 'wht', name: 'True Architect White', hex: '#FFFFFF', skuCode: 'WHT', border: '#FFFFFF' },
  { id: 'ppl', name: 'Pleasantville Purple', hex: '#4B0082', skuCode: 'PPL', border: '#4B0082' },
  { id: 'acb', name: 'Atlantic City Blue', hex: '#1E3A5F', skuCode: 'ACB', border: '#1E3A5F' },
  { id: 'mmb', name: 'Mocha Mousse Brown', hex: '#8B6914', skuCode: 'MMB', border: '#8B6914' },
  { id: 'tbk', name: 'Triple Black Stealth', hex: '#0a0a0a', skuCode: 'TBK', border: '#1a1a1a' },
];

const transactionFeed = [
  { wallet: '0x7aA1...3b4C', amount: '+100 $BLOCKS', zip: '08232' },
  { wallet: '0x3F2d...9E1a', amount: '+100 $BLOCKS', zip: '08330' },
  { wallet: '0x89bC...55fD', amount: '+100 $BLOCKS', zip: '08360' },
  { wallet: '0x4eEd...12aB', amount: '+100 $BLOCKS', zip: '08401' },
];

export default function Home() {
  const [activeColorway, setActiveColorway] = useState(colorways[0]);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % transactionFeed.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ====== HERO SECTION ====== */}
      <section className="sacred-geometry relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-4xl"
          >
            {/* Frequency Badge */}
            <div className="mb-6">
              <span className="frequency-badge frequency-pulse">44:OMNI FREQUENCY ACTIVE</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              <span className="block text-white">XLVIII BLOCKS</span>
              <span className="block" style={{ color: '#D4AF37' }}>× VNLND</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-neutral-400 max-w-2xl mb-8" style={{ fontFamily: "'Courier Prime', monospace" }}>
              Sovereign footwear architecture. Fusing Virgil Abloh's deconstructed philosophy with sacred, futuristic design. Built for the 144,000 Guardians.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/shop" className="btn-sovereign">
                EXPLORE COLLECTION
              </a>
              <a href="/leaderboard" className="btn-outline-sovereign">
                $BLOCKS LEADERBOARD
              </a>
            </div>

            {/* Live Transaction Ticker */}
            <div className="mt-12 p-4 border border-neutral-800 bg-black/50 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">LIVE CLAIMS</span>
              </div>
              <motion.div
                key={tickerIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between"
              >
                <span className="text-xs font-mono text-white">{transactionFeed[tickerIndex].wallet}</span>
                <span className="text-xs font-mono font-bold" style={{ color: '#D4AF37' }}>{transactionFeed[tickerIndex].amount}</span>
                <span className="text-xs font-mono text-neutral-500">{transactionFeed[tickerIndex].zip}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
      </section>

      {/* ====== FEATURED COLLECTION ====== */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-responsive">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-white mb-2">ODSY-KAI-FUSION-v1</h2>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">7 COLORWAYS • $148.00 USD</p>
            </div>
            <a href="/shop" className="text-xs font-mono uppercase tracking-widest hover:text-yellow-400 transition-colors" style={{ color: '#D4AF37' }}>
              VIEW ALL →
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colorways.map((color, index) => (
              <motion.div
                key={color.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                onMouseEnter={() => setHoveredProduct(color.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group cursor-pointer"
              >
                {/* Product Card */}
                <div
                  className="relative aspect-square border border-neutral-800 bg-neutral-950 overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: hoveredProduct === color.id ? color.border : undefined,
                    boxShadow: hoveredProduct === color.id ? `0 0 30px ${color.hex}20` : undefined,
                  }}
                >
                  {/* 3D Wireframe Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 border-2 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
                      style={{ borderColor: color.hex === '#000000' ? '#333' : color.hex }}
                    />
                    <div
                      className="absolute w-24 h-24 border transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-125"
                      style={{ borderColor: color.hex === '#000000' ? '#333' : color.hex, opacity: 0.5 }}
                    />
                  </div>

                  {/* SKU Label */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono text-neutral-500">
                      XLVIII-SNK-{color.skuCode}-08232
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{color.name}</p>
                    <p className="text-xs font-mono text-neutral-500">ODSY-KAI-FUSION-v1</p>
                  </div>
                  <p className="text-sm font-bold" style={{ color: '#D4AF37' }}>$148</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SOUL ALTAR & ZAKAT ENGINE ====== */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Soul Altar */}
            <div className="p-8 border border-neutral-800 bg-neutral-950">
              <div className="mb-4">
                <span className="frequency-badge">SOUL ALTAR</span>
              </div>
              <h3 className="text-white mb-4">Sacred Architecture</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Every purchase feeds the Soul Altar — a sovereign spiritual engine that distributes blessings across the 144,000 Guardians. Your $BLOCKS allocation is your key to the eternal ledger.
              </p>
            </div>

            {/* Zakat Engine */}
            <div className="p-8 border border-neutral-800 bg-neutral-950">
              <div className="mb-4">
                <span className="frequency-badge">ZAKAT ENGINE</span>
              </div>
              <h3 className="text-white mb-4">Community Revenue</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The Zakat Engine routes 5% of all revenue directly to South Jersey community chests — Pleasantville (08232), Mays Landing (08330), Vineland (08360), and Atlantic City (08401).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== VIRGIL ABLOH LEGACY TEASER ====== */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-responsive text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">DESIGN PHILOSOPHY</p>
          <h2 className="text-white mb-6">The 3% Rule</h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8" style={{ fontFamily: "'Courier Prime', monospace" }}>
            "If you put 3% more effort into something, it becomes something new." — Virgil Abloh. Every XLVIII BLOCKS piece carries this DNA. The ODSY-1000 heritage. The '08360' puff. The deconstructed future.
          </p>
          <a href="/legacy" className="btn-outline-sovereign">
            EXPLORE THE LEGACY →
          </a>
        </div>
      </section>

      {/* ====== PROMETHEUS VERIFICATION CTA ====== */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-responsive">
          <div className="terminal-ui max-w-2xl mx-auto text-center">
            <p className="text-xs mb-2 text-neutral-500">PROMETHEUS VERIFICATION SYSTEM</p>
            <p className="text-lg font-bold mb-4" style={{ color: '#D4AF37' }}>VERIFY YOUR PHYSICAL ASSET</p>
            <p className="text-xs text-neutral-400 mb-6">
              Hold your NFC-enabled device to the custom hanging loop badge on your XLVIII BLOCKS product to verify authenticity and claim your $BLOCKS allocation.
            </p>
            <a href="/verify" className="btn-sovereign inline-block">
              INITIATE VERIFICATION
            </a>
          </div>
        </div>
      </section>

      {/* ====== COMMUNITY HUBS ====== */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container-responsive">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8 text-center">SOUTH JERSEY COMMUNITY CHEST NETWORK</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { zip: '08232', city: 'Pleasantville', claims: 48 },
              { zip: '08330', city: 'Mays Landing', claims: 36 },
              { zip: '08360', city: 'Vineland', claims: 29 },
              { zip: '08401', city: 'Atlantic City', claims: 14 },
            ].map((hub) => (
              <div key={hub.zip} className="p-4 border border-neutral-800 bg-neutral-950 text-center hover:border-yellow-600 transition-colors cursor-pointer">
                <p className="text-2xl font-bold text-white">{hub.zip}</p>
                <p className="text-xs font-mono text-neutral-500 mt-1">{hub.city}</p>
                <p className="text-xs font-mono mt-2" style={{ color: '#D4AF37' }}>{hub.claims} CLAIMS</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
