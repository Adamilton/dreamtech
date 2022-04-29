/* const cmd = require('node-cmd')
cmd.run('npm start') */

// module.exports = {
//   apps: [
//     {
//       script: 'server.js',
//       cwd: './backend/',
//       name: 'Backend',
//       watch: true,
//       ignoreWatch: [".git", "node_modules"]
//     },    
//   ]
// }

module.exports = {
  apps: [
    {
      name: "Backend",
      script: "server.js",
      /* args: "start", */
      cwd: "./backend/",
      watch: true,
      watch_delay: 1000,
      "ignore_watch": ["node_modules"]
    },
    {
      name: "Frontend-react",
      "script": "npm",
      "args": "run start",
      cwd: "./frontend1/",
      watch: true,
      watch_delay: 1000,
      "ignore_watch": ["node_modules"]
    }
  ]
};