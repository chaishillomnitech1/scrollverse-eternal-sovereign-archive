import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const mockTransactions = [
  { hash: '0x44f0e1a7...b2c3d4e5', type: 'MINT', amount: '$148.00', split: { creator: 74, supply: 44.4, ecosystem: 29.6 }, time: '12s ago', colorway: 'PPL' },
  { hash: '0x89bC55fD...9E1a3F2d', type: 'CLAIM', amount: '100 $BLOCKS', split: { creator: 50, supply: 30, ecosystem: 20 }, time: '45s ago', colorway: 'BLK' },
  { hash: '0x3F2d9E1a...7aA13b4C', type: 'MINT', amount: '$88.00', split: { creator: 44, supply: 26.4, ecosystem: 17.6 }, time: '1m ago', colorway: 'SAGE' },
  { hash: '0xC1d27F8a...A5b64E9c', type: 'ZAKAT', amount: '$7.40', split: { creator: 0, supply: 0, ecosystem: 7.4 }, time: '2m ago', colorway: 'ACB' },
  { hash: '0xD8e91B2c...F0a16D3e', type: 'MINT', amount: '$148.00', split: { creator: 74, supply: 44.4, ecosystem: 29.6 }, time: '3m ago', colorway: 'WHT' },
  { hash: '0xA5b64E9c...C1d27F8a', type: 'CLAIM', amount: '100 $BLOCKS', split: { creator: 50, supply: 30, ecosystem: 20 }, time: '5m ago', colorway: 'TBK' },
];

export default function Monitor() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [totalVolume, setTotalVolume] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalVolume((prev) => prev + Math.floor(Math.random() * 50));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            <span className="frequency-badge">SCROLL zkEVM 534352</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <h1 className="text-white mb-4">TRANSACTION<br />MONITOR</h1>
          <p className="text-sm font-mono text-neutral-500">
            Live split telemetry — 50% Creator • 30% Supply Chain • 20% Ecosystem
          </p>
        </motion.div>

        {/* Revenue Split Visualization */}
        <div className="mb-12 p-6 border border-neutral-800 bg-neutral-950">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">ScrollSoulSplit.sol — REVENUE DISTRIBUTION</p>
          <div className="flex h-8 overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="bg-[#D4AF37] flex items-center justify-center"
            >
              <span className="text-[10px] font-mono font-bold text-black">CREATOR 50%</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '30%' }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="bg-[#D4AF37]/60 flex items-center justify-center"
            >
              <span className="text-[10px] font-mono font-bold text-black">SUPPLY 30%</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20%' }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="bg-[#D4AF37]/30 flex items-center justify-center"
            >
              <span className="text-[10px] font-mono font-bold text-white">ECO 20%</span>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold" style={{ color: '#D4AF37' }}>${(totalVolume * 0.5).toLocaleString()}</p>
              <p className="text-[10px] font-mono text-neutral-500">CREATOR WALLET</p>
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: '#D4AF37' }}>${(totalVolume * 0.3).toLocaleString()}</p>
              <p className="text-[10px] font-mono text-neutral-500">SUPPLY CHAIN</p>
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: '#D4AF37' }}>${(totalVolume * 0.2).toLocaleString()}</p>
              <p className="text-[10px] font-mono text-neutral-500">ECOSYSTEM</p>
            </div>
          </div>
        </div>

        {/* Transaction Feed */}
        <div className="border border-neutral-800 bg-neutral-950">
          <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">LIVE TRANSACTION FEED</span>
            <span className="text-xs font-mono" style={{ color: '#D4AF37' }}>
              VOL: ${totalVolume.toLocaleString()}
            </span>
          </div>

          {transactions.map((tx, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 ${
                    tx.type === 'MINT' ? 'bg-green-900/30 text-green-400' :
                    tx.type === 'CLAIM' ? 'bg-blue-900/30 text-blue-400' :
                    'bg-purple-900/30 text-purple-400'
                  }`}>
                    {tx.type}
                  </span>
                  <span className="text-xs font-mono text-white">{tx.hash}</span>
                  <span className="text-[10px] font-mono text-neutral-600">{tx.colorway}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono font-bold" style={{ color: '#D4AF37' }}>{tx.amount}</span>
                  <span className="text-[10px] font-mono text-neutral-500">{tx.time}</span>
                </div>
              </div>

              {/* Split Bar */}
              <div className="flex h-1 overflow-hidden">
                <div className="bg-[#D4AF37]" style={{ width: '50%' }} />
                <div className="bg-[#D4AF37]/60" style={{ width: '30%' }} />
                <div className="bg-[#D4AF37]/30" style={{ width: '20%' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
