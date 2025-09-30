const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Northern Lights Aurora */}
      <div className="absolute inset-0">
        {/* Aurora layers */}
        <div 
          className="absolute top-0 left-0 w-full h-2/3 animate-aurora"
          style={{
            background: `linear-gradient(135deg, 
              transparent 0%, 
              hsl(var(--aurora-green) / 0.3) 25%, 
              hsl(var(--aurora-blue) / 0.4) 50%, 
              hsl(var(--aurora-purple) / 0.3) 75%, 
              transparent 100%
            )`,
            filter: 'blur(40px)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-10 left-0 w-full h-1/2 animate-aurora-slow"
          style={{
            background: `linear-gradient(45deg, 
              transparent 0%, 
              hsl(var(--aurora-pink) / 0.2) 30%, 
              hsl(var(--aurora-green) / 0.3) 60%, 
              transparent 100%
            )`,
            filter: 'blur(60px)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-5 left-0 w-full h-3/5 animate-aurora"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              hsl(var(--aurora-blue) / 0.2) 40%, 
              hsl(var(--aurora-purple) / 0.3) 70%, 
              transparent 100%
            )`,
            filter: 'blur(80px)',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        />
      </div>

      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Small floating particles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full animate-float-slow" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
      
      {/* Aurora particles */}
      <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-[hsl(var(--aurora-green))] rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-[hsl(var(--aurora-blue))] rounded-full animate-aurora opacity-40" />
      <div className="absolute top-1/4 left-2/3 w-1 h-1 bg-[hsl(var(--aurora-purple))] rounded-full animate-pulse-glow opacity-50" />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30" />
    </div>
  );
};

export default FloatingElements;
