import { useState } from 'react';
import { motion } from 'framer-motion';

const colorways = [
  { id: 'blk', name: 'Black Night Eclipse', hex: '#0a0a0a', skuCode: 'BLK', border: '#333333', price: 148, hoodiePrice: 88 },
  { id: 'sage', name: 'Sage Resonance', hex: '#7A8B7B', skuCode: 'SAGE', border: '#7A8B7B', price: 148, hoodiePrice: 88 },
  { id: 'wht', name: 'True Architect White', hex: '#F5F5F5', skuCode: 'WHT', border: '#E0E0E0', price: 148, hoodiePrice: 88 },
  { id: 'ppl', name: 'Pleasantville Purple', hex: '#4B0082', skuCode: 'PPL', border: '#6B20A8', price: 148, hoodiePrice: 88 },
  { id: 'acb', name: 'Atlantic City Blue', hex: '#1E3A5F', skuCode: 'ACB', border: '#2E5A8F', price: 148, hoodiePrice: 88 },
  { id: 'mmb', name: 'Mocha Mousse Brown', hex: '#8B6914', skuCode: 'MMB', border: '#A07B24', price: 148, hoodiePrice: 88 },
  { id: 'tbk', name: 'Triple Black Stealth', hex: '#050505', skuCode: 'TBK', border: '#1a1a1a', price: 148, hoodiePrice: 88 },
];

const sizes = ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12', 'US 13'];
const hoodieSizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

type ProductType = 'sneaker' | 'hoodie';

export default function Shop() {
  const [selectedColorway, setSelectedColorway] = useState(colorways[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [productType, setProductType] = useState<ProductType>('sneaker');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12">
      <div className="container-responsive">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="frequency-badge mb-4 inline-block">XLVIII BLOCKS × VNLND</span>
          <h1 className="text-white mb-4">COLLECTION</h1>
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            7 COLORWAYS • SOUTH JERSEY HERITAGE • SCROLL zkEVM 534352 SEALED
          </p>
        </motion.div>

        {/* Product Type Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setProductType('sneaker')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all ${
              productType === 'sneaker'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'border border-neutral-700 text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            ODSY-KAI-FUSION-v1 • $148
          </button>
          <button
            onClick={() => setProductType('hoodie')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all ${
              productType === 'hoodie'
                ? 'bg-[#D4AF37] text-black font-bold'
                : 'border border-neutral-700 text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            485 GSM HOODIE • $88
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Product Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {colorways.map((color, index) => (
                <motion.div
                  key={color.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredProduct(color.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => setSelectedColorway(color)}
                  className={`group cursor-pointer ${selectedColorway.id === color.id ? 'ring-2 ring-[#D4AF37]' : ''}`}
                >
                  <div
                    className="relative aspect-square border border-neutral-800 bg-neutral-950 overflow-hidden transition-all duration-300"
                    style={{
                      borderColor: hoveredProduct === color.id ? color.border : undefined,
                      boxShadow: hoveredProduct === color.id ? `0 0 30px ${color.hex}20` : undefined,
                    }}
                  >
                    {/* Wireframe Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-20 h-20 border-2 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
                        style={{ borderColor: color.hex === '#0a0a0a' || color.hex === '#050505' ? '#333' : color.hex }}
                      />
                      <div
                        className="absolute w-14 h-14 border transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-125"
                        style={{ borderColor: color.hex === '#0a0a0a' || color.hex === '#050505' ? '#333' : color.hex, opacity: 0.5 }}
                      />
                    </div>

                    {/* SKU */}
                    <div className="absolute top-2 left-2">
                      <span className="text-[9px] font-mono text-neutral-600">
                        XLVIII-{productType === 'sneaker' ? 'SNK' : 'HOOD'}-{color.skuCode}-08232
                      </span>
                    </div>

                    {/* Selected Indicator */}
                    {selectedColorway.id === color.id && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-[#D4AF37] rounded-full" />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                        {color.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:col-span-1">
            <motion.div
              key={selectedColorway.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-24 p-6 border border-neutral-800 bg-neutral-950"
            >
              {/* Product Name */}
              <div className="mb-6">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                  {productType === 'sneaker' ? 'ODSY-KAI-FUSION-v1' : '485 GSM HEAVYWEIGHT HOODIE'}
                </p>
                <h2 className="text-white text-2xl font-bold mb-2">{selectedColorway.name}</h2>
                <p className="text-2xl font-bold" style={{ color: '#D4AF37' }}>
                  ${productType === 'sneaker' ? selectedColorway.price : selectedColorway.hoodiePrice}.00
                </p>
              </div>

              {/* SKU Info */}
              <div className="mb-6 p-3 border border-neutral-800 bg-black">
                <p className="text-[10px] font-mono text-neutral-500">
                  SKU: XLVIII-{productType === 'sneaker' ? 'SNK' : 'HOOD'}-{selectedColorway.skuCode}-08232
                </p>
                <p className="text-[10px] font-mono text-neutral-500 mt-1">
                  SCROLL zkEVM: 534352 • NFC VERIFIED
                </p>
              </div>

              {/* Colorway Selector */}
              <div className="mb-6">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">COLORWAY</p>
                <div className="flex flex-wrap gap-2">
                  {colorways.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColorway(color)}
                      className={`w-8 h-8 border-2 transition-all ${
                        selectedColorway.id === color.id ? 'border-[#D4AF37] scale-110' : 'border-neutral-700 hover:border-neutral-500'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">SIZE</p>
                <div className="grid grid-cols-4 gap-2">
                  {(productType === 'sneaker' ? sizes : hoodieSizes).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-mono text-center border transition-all ${
                        selectedSize === size
                          ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-neutral-700 text-neutral-400 hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button className="btn-sovereign w-full mb-3">
                ADD TO CART
              </button>

              {/* NFC Verification Note */}
              <div className="p-3 border border-neutral-800 bg-black mt-4">
                <p className="text-[10px] font-mono text-[#D4AF37] mb-1">PROMETHEUS VERIFICATION INCLUDED</p>
                <p className="text-[9px] font-mono text-neutral-500">
                  Each product includes an NFC-enabled hanging loop badge for physical-to-digital authentication and $BLOCKS claim.
                </p>
              </div>

              {/* Revenue Split */}
              <div className="mt-4 p-3 border border-neutral-800">
                <p className="text-[10px] font-mono text-neutral-500 mb-2">REVENUE DISTRIBUTION</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-neutral-400">Creator</span>
                    <span className="text-[#D4AF37]">50%</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-neutral-400">Supply Chain</span>
                    <span className="text-[#D4AF37]">30%</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-neutral-400">Ecosystem</span>
                    <span className="text-[#D4AF37]">20%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
