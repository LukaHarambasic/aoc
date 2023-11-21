// Not sure if this will be needed, or if everything will be handled via tests?

// import * as fs from 'fs';
// import * as path from 'path';

// async function importAllDayModules() {
//   const srcDirectory = path.join(import.meta.dir, 'src');
//   try {
//     const dayDirectories = fs.readdirSync(srcDirectory).filter(file => {
//       const filePath = path.join(srcDirectory, file);
//       return fs.statSync(filePath).isDirectory();
//     });
//     return await Promise.all(
//       dayDirectories.map(dayDir => {
//         const indexPath = path.join(srcDirectory, dayDir, 'index.ts');
//         return import(indexPath);
//       })
//     );
//   } catch (error) {
//     console.error('Error importing modules:', error);
//     return [];
//   }
// }

// const modules = await importAllDayModules();

// modules.forEach((module, index) => {
//     console.log(`Running module ${index + 1}`);
//     module.default();
// });