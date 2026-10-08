import ts from 'typescript';
import fs from 'node:fs/promises';
await fs.mkdir('.sites-runtime/tests',{recursive:true});
await fs.writeFile('.sites-runtime/tests/model.mjs',ts.transpile(await fs.readFile('src/model.ts','utf8'),{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}));
await fs.writeFile('.sites-runtime/tests/test.mjs',ts.transpile((await fs.readFile('tests/model.test.ts','utf8')).replace("'../src/model'","'./model.mjs'"),{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}));
await import('../.sites-runtime/tests/test.mjs');
