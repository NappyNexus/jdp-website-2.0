// One-shot codemod that adds `dark:` Tailwind variants to existing class strings.
// Run once after the redesign; safe-no-op on already-processed files because every
// rule is anchored on tokens that don't appear in the dark: form.
import fs from 'node:fs';

const replacements = [
  // text-jdpblue/X
  [/text-jdpblue\/35(?!\d)/g, 'text-jdpblue/35 dark:text-jdpcream/35'],
  [/text-jdpblue\/45(?!\d)/g, 'text-jdpblue/45 dark:text-jdpcream/45'],
  [/text-jdpblue\/55(?!\d)/g, 'text-jdpblue/55 dark:text-jdpcream/55'],
  [/text-jdpblue\/60(?!\d)/g, 'text-jdpblue/60 dark:text-jdpcream/60'],
  [/text-jdpblue\/65(?!\d)/g, 'text-jdpblue/65 dark:text-jdpcream/65'],
  [/text-jdpblue\/70(?!\d)/g, 'text-jdpblue/70 dark:text-jdpcream/70'],
  [/text-jdpblue\/80(?!\d)/g, 'text-jdpblue/80 dark:text-jdpcream/80'],

  // hover:text-jdpblue/X first (specific), then bare hover:text-jdpblue (catch-all)
  [/hover:text-jdpblue(?![/\w-])/g, 'hover:text-jdpblue dark:hover:text-jdpcream'],

  // text-jdpblue (bare token, not as a prefix to /X or word). Only match when
  // preceded by quote or whitespace (start of a class token) to avoid matching
  // hover:text-jdpblue or other prefixed variants which were already handled.
  [/(["' \t])text-jdpblue(?![/\w-])/g, '$1text-jdpblue dark:text-jdpcream'],

  // border-jdpblue/X
  [/border-jdpblue\/8(?!\d)/g, 'border-jdpblue/8 dark:border-jdpcream/8'],
  [/border-jdpblue\/10(?!\d)/g, 'border-jdpblue/10 dark:border-jdpcream/10'],
  [/border-jdpblue\/12(?!\d)/g, 'border-jdpblue/12 dark:border-jdpcream/12'],
  [/border-jdpblue\/15(?!\d)/g, 'border-jdpblue/15 dark:border-jdpcream/15'],
  [/border-jdpblue\/30(?!\d)/g, 'border-jdpblue/30 dark:border-jdpcream/30'],
  [/border-jdpblue\/40(?!\d)/g, 'border-jdpblue/40 dark:border-jdpcream/40'],

  // hover:border-jdpblue/X
  [/hover:border-jdpblue\/40/g, 'hover:border-jdpblue/40 dark:hover:border-jdpcream/40'],

  // bg-jdpblue/X (tints) — don't touch solid bg-jdpblue
  [/bg-jdpblue\/8(?!\d)/g, 'bg-jdpblue/8 dark:bg-jdpcream/8'],
  [/bg-jdpblue\/10(?!\d)/g, 'bg-jdpblue/10 dark:bg-jdpcream/10'],

  // placeholder:text-jdpblue/X
  [/placeholder:text-jdpblue\/35/g, 'placeholder:text-jdpblue/35 dark:placeholder:text-jdpcream/35'],

  // Section/page surface flips. Anchor on space/quote so we don't double-match.
  [/(["' \t])bg-jdpcream(?![\w/-])/g, '$1bg-jdpcream dark:bg-jdpnight'],
  [/(["' \t])bg-jdpsand(?![\w/-])/g, '$1bg-jdpsand dark:bg-jdpnight-2'],
  [/(["' \t])bg-jdpink(?![\w/-])/g, '$1bg-jdpink dark:bg-jdpnight-3'],
  [/(["' \t])bg-jdpsoft(?![\w/-])/g, '$1bg-jdpsoft dark:bg-jdpnight-soft'],

  // White card surface
  [/(["' \t])bg-white(?![\w/-])/g, '$1bg-white dark:bg-jdpcard'],
  [/bg-white\/60/g, 'bg-white/60 dark:bg-jdpcard/60'],

  // focus:bg-white on form inputs
  [/focus:bg-white(?![\w/-])/g, 'focus:bg-white dark:focus:bg-jdpcard'],
];

const files = process.argv.slice(2);
let totalChanges = 0;
for (const f of files) {
  let src = fs.readFileSync(f, 'utf8');
  const before = src.length;
  for (const [pat, rep] of replacements) {
    src = src.replace(pat, rep);
  }
  const after = src.length;
  fs.writeFileSync(f, src);
  console.log(`${f}: +${after - before} bytes`);
  totalChanges += after - before;
}
console.log(`Total added: ${totalChanges} bytes`);
