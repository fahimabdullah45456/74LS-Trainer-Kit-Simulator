/* Run the DOM-free simulator regression suite with Node.js (no dependencies). */
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
function scriptById(id) {
  const match = html.match(new RegExp(`<script id="${id}">([\\s\\S]*?)<\\/script>`));
  if (!match) throw new Error(`Missing inline script: ${id}`);
  return match[1];
}

const context = vm.createContext({ console });
vm.runInContext(
  `${scriptById('engine')}\n${scriptById('selftests')}\nglobalThis.__results = runSelfTests();`,
  context,
  { filename: 'simulator-selftests.js', timeout: 120_000 },
);

const results = context.__results;
for (const result of results) {
  console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.name}${result.detail ? ` — ${result.detail}` : ''}`);
}
const passed = results.filter(({ ok }) => ok).length;
console.log(`\n${passed}/${results.length} tests passed.`);
if (passed !== results.length) process.exitCode = 1;
