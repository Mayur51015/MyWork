function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">{subtitle}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-cyan-400/80" />
    </div>
  );
}

export default SectionHeading;
