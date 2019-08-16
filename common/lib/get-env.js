export function GetEnvValue(title, values, protocol) {
  switch (title) {
    case 'node':
      if (protocol === 'https') {
        return JSON.parse(process.env.GlobalEnv)[values].replace('http', 'https')
      } else {
        return JSON.parse(process.env.GlobalEnv)[values]
      }
    case 'browser':
      if (protocol === 'https') {
        return window.__INITIAL_ENV__ && window.__INITIAL_ENV__.Env && window.__INITIAL_ENV__.Env[values].replace('http', 'https')
      } else {
        return window.__INITIAL_ENV__ && window.__INITIAL_ENV__.Env && window.__INITIAL_ENV__.Env[values]
      }
  }
};