import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const zipNodes = [
  { zip: '08232', city: 'Pleasantville', alias: '#theville', claims: 48, blocks: 4800, rank: 1 },
  { zip: '08330', city: 'Mays Landing', alias: 'Exit 12', claims: 36, blocks: 3600, rank: 2 },
  { zip: '08360', city: 'Vineland', alias: 'VNLND', claims: 29, blocks: 2900, rank: 3 },
  { zip: '08401', city: 'Atlantic City', alias: 'AC', claims: 14, blocks: 1400, rank: 4 },
];

const recentClaims = [
  { wallet: '0x7aA1...3b4C', blocks: 100, zip: '08232', time: '2m ago' },
  { wallet: '0x3F2d...9E1a', blocks: 100, zip: '08330', time: '5m ago' },
  { wallet: '0x89bC...55fD', blocks: 100, zip: '08360', time: '8m ago' },
  { wallet: '0x4eEd...12aB', blocks: 100, zip: '08401', time: '12m ago' },
  { wallet: '0xC1d2...7F8a', blocks: 100, zip: '08232', time: '15m ago' },
  { wallet: '0xA5b6...4E9c', blocks: 100, zip: '08232', time: '18m ago' },
  { wallet: '0xD8e9...1B2c', blocks: 100, zip: '08330', time: '22m ago' },
  { wallet: '0xF0a1...6D3e', blocks: 100, zip: '08360', time: '25m ago' },
];

export default function Leaderboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pulseOpacity, setPulseOpacity] = useState(1);

  useEffect(() => {
    // 963Hz frequency tuning animation
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    const pulse = setInterval(() => {
      setPulseOpacity((prev) => (prev === 1 ? 0.5 : 1));
    }, 1000);
    return () => { clearTimeout(timer); clearInterval(pulse); };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="frequency-badge mb-4 inline-block">963Hz FREQUENCY TUNING</div>
          <div className="w-64 h-1 bg-neutral-800 mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-[#D4AF37]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-xs font-mono text-neutral-500 mt-4">ALIGNING SOVEREIGN FREQUENCY...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="frequency-badge">$BLOCKS LEADERBOARD</span>
            <span className="frequency-badge frequency-pulse" style={{ opacity: pulseOpacity }}>LIVE</span>
          </div>
          <h1 className="text-white mb-4">SOUTH JERSEY<br />NODE RANKINGS</h1>
          <p className="text-sm font-mono text-neutral-500">
            Real-time $BLOCKS claim rankings by zip-code node. 144,000 Guardians.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 border border-neutral-800 bg-neutral-950">
            <p className="text-xs font-mono text-neutral-500 mb-1">TOTAL CLAIMS</p>
            <p className="text-2xl font-bold text-white">127</p>
          </div>
          <div className="p-4 border border-neutral-800 bg-neutral-950">
            <p className="text-xs font-mono text-neutral-500 mb-1">$BLOCKS MINTED</p>
            <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>12,700</p>
          </div>
          <div className="p-4 border border-neutral-800 bg-neutral-950">
            <p className="text-xs font-mono text-neutral-500 mb-1">ACTIVE NODES</p>
            <p className="text-2xl font-bold text-white">4</p>
          </div>
          <div className="p-4 border border-neutral-800 bg-neutral-950">
            <p className="text-xs font-mono text-neutral-500 mb-1">GUARDIANS</p>
            <p className="text-2xl font-bold text-white">89</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Node Rankings */}
          <div className="lg:col-span-2">
            <div className="border border-neutral-800 bg-neutral-950">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 p-4 border-b border-neutral-800 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                <span>RANK</span>
                <span>ZIP</span>
                <span>CITY</span>
                <span>ALIAS</span>
                <span className="text-right">CLAIMS</span>
                <span className="text-right">$BLOCKS</span>
              </div>

              {/* Table Rows */}
              {zipNodes.map((node, index) => (
                <motion.div
                  key={node.zip}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-6 gap-4 p-4 border-b border-neutral-900 hover:bg-neutral-900/50 transition-colors"
                >
                  <span className="text-lg font-bold" style={{ color: index === 0 ? '#D4AF37' : '#fff' }}>
                    #{node.rank}
                  </span>
                  <span className="text-sm font-mono text-white font-bold">{node.zip}</span>
                  <span className="text-sm text-neutral-300">{node.city}</span>
                  <span className="text-xs font-mono" style={{ color: '#D4AF37' }}>{node.alias}</span>
                  <span className="text-sm text-white text-right font-bold">{node.claims}</span>
                  <span className="text-sm text-right font-bold" style={{ color: '#D4AF37' }}>{node.blocks.toLocaleString()}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Recent Claims Feed */}
          <div className="lg:col-span-1">
            <div className="border border-neutral-800 bg-neutral-950 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">RECENT CLAIMS</span>
              </div>

              <div className="space-y-3">
                {recentClaims.map((claim, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between py-2 border-b border-neutral-900"
                  >
                    <div>
                      <p className="text-xs font-mono text-white">{claim.wallet}</p>
                      <p className="text-[10px] font-mono text-neutral-500">{claim.zip} • {claim.time}</p>
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: '#D4AF37' }}>
                      +{claim.blocks} $BLOCKS
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
