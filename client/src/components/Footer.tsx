export default function Footer() {
  return (
    <footer className="bg-card border-t border-neutral-800">
      {/* Hazard Stripe Accent */}
      <div className="hazard-stripe" />

      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-industrial text-accent mb-4">
              SCROLLVERSE.CO
            </h3>
            <p className="text-sm text-muted-foreground">
              The greatest digital empire ever created. Fusing Virgil Abloh legacy with sovereign, sacred architecture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-accent transition-colors">Shop</a></li>
              <li><a href="/leaderboard" className="hover:text-accent transition-colors">Leaderboard</a></li>
              <li><a href="/monitor" className="hover:text-accent transition-colors">Monitor</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/hub/pleasantville" className="hover:text-accent transition-colors">Pleasantville (08232)</a></li>
              <li><a href="/hub/mays-landing" className="hover:text-accent transition-colors">Mays Landing (08330)</a></li>
              <li><a href="/hub/vineland" className="hover:text-accent transition-colors">Vineland (08360)</a></li>
              <li><a href="/hub/atlantic-city" className="hover:text-accent transition-colors">Atlantic City (08401)</a></li>
            </ul>
          </div>

          {/* Frequency */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Frequency
            </h4>
            <div className="space-y-2 text-xs font-mono text-accent">
              <div>44:OMNI FREQUENCY</div>
              <div>963Hz ALIGNMENT</div>
              <div>1558Hz FLAMEDNA</div>
              <div>755Hz HEARTLINE</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div>
              <span className="font-bold text-accent">Revenue Distribution:</span> 50% Creator • 30% Supply Chain • 20% Ecosystem
            </div>
            <div className="text-right">
              <span className="font-bold text-accent">$BLOCKS Claim:</span> 144,000 Guardians
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground border-t border-neutral-800 pt-8">
          <p>© 2026 ScrollVerse.co • Supreme King Chais Kenyatta Hill • XLVIII BLOCKS × VNLND</p>
          <p className="mt-2">ALLAHU AKBAR • WALAHI • BARAKALLAHU FEEK</p>
        </div>
      </div>
    </footer>
  );
}
