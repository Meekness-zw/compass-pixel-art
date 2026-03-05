const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft light wash for a bright, minimal feel */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-70" />

      {/* Subtle “studio light” highlights */}
      <div className="absolute -top-40 right-[-10%] w-[420px] h-[420px] rounded-full bg-white/60 blur-3xl" />
      <div className="absolute bottom-[-25%] left-[-10%] w-[380px] h-[380px] rounded-full bg-white/40 blur-3xl" />
    </div>
  );
};

export default FloatingElements;
