<!-- B3 — Cinematic Typography Rules -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* B3 — Cinematic Typography System */

/* Base Typography */
body {
  font-family: var(--nw-font-primary);
  font-weight: var(--nw-weight-regular);
  font-size: 1rem;
  line-height: 1.75;
  color: var(--nw-color-mooncrest);
}

/* Heading Hierarchy */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--nw-font-secondary);
  font-weight: var(--nw-weight-bold);
  line-height: 1.3;
  margin-bottom: var(--nw-space-md);
  margin-top: var(--nw-space-xl);
  color: var(--nw-color-mooncrest);
}

/* Cinematic Heading Sizes */
h1 {
  font-size: 3rem;
  letter-spacing: 0.02em;
}

h2 {
  font-size: 2.4rem;
  letter-spacing: 0.015em;
}

h3 {
  font-size: 1.9rem;
  letter-spacing: 0.01em;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1.1rem;
}

/* Paragraph Rhythm */
p {
  margin-bottom: var(--nw-space-md);
  max-width: 75ch;
}

/* Accent Typography */
.nw-accent-text {
  font-family: var(--nw-font-accent);
  font-weight: var(--nw-weight-black);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--nw-accent-blue);
}

/* Wilderness Serif Accent */
.nw-wilderness-serif {
  font-family: var(--nw-font-secondary);
  font-style: italic;
  color: var(--nw-color-forest);
}

/* Cinematic Drop Caps */
.nw-dropcap:first-letter {
  font-family: var(--nw-font-secondary);
  font-size: 4rem;
  float: left;
  line-height: 0.85;
  padding-right: var(--nw-space-sm);
  padding-top: var(--nw-space-xs);
  color: var(--nw-accent-gold);
}

/* Link Styling */
a {
  font-weight: var(--nw-weight-medium);
  color: var(--nw-accent-blue);
  text-decoration: underline;
  transition: color var(--nw-transition-fast);
}

a:hover {
  color: var(--nw-accent-gold);
}

/* Cinematic Blockquotes */
blockquote {
  font-family: var(--nw-font-secondary);
  font-size: 1.3rem;
  line-height: 1.6;
  padding: var(--nw-space-lg);
  border-left: 6px solid var(--nw-accent-blue);
  background: var(--nw-gradient-summit);
  margin: var(--nw-space-xl) 0;
}

/* Responsive Typography */
@media (max-width: 768px) {
  h1 { font-size: 2.4rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.6rem; }
  h4 { font-size: 1.3rem; }
  h5 { font-size: 1.15rem; }
  h6 { font-size: 1rem; }
}

/* Motion Reduction Compatibility */
.motion-reduction-mode * {
  transition: none !important;
}
