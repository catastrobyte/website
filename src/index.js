addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  const filePath = url.pathname;

  const staticFileExtensions = [
    '.html', '.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg',
    '.ico', '.woff', '.woff2', '.ttf', '.eot', '.map'
  ];

  const isStaticFile = staticFileExtensions.some(ext => filePath.endsWith(ext));

  if (!isStaticFile && filePath !== '/') {
    url.pathname = '/index.html'; // Puntiamo sempre a index.html
    return fetch(url.toString());
  } else if (filePath === '/') {
    url.pathname = '/index.html';
    return fetch(url.toString());
  } else {
    return fetch(request);
  }
}
