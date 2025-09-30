const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Small floating particles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full animate-float-slow" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />
    </div>
  );
};

export default FloatingElements;
