/**
 * "Think Outsourcing. Think ZAH." letter-by-letter entrance, done in CSS
 * (`.wave-char` in globals.css) so the hero needs no animation library.
 * Screen readers get the plain sentence; the split letters are hidden from them.
 */
export function WaveTextAnimation({ content }: { content: string }) {
  return (
    <span>
      <span className="sr-only">{content}</span>
      {Array.from(content).map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="wave-char"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </span>
  );
}
