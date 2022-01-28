const actionElements = {
    title: document.getElementById('title'),
    text: document.getElementById('text'),
    url: document.getElementById('url')
}

window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));

    actionElements.title.innerHTML = parsedUrl.searchParams.get('title');
    actionElements.text.innerHTML = parsedUrl.searchParams.get('text');
    actionElements.url.innerHTML = parsedUrl.searchParams.get('url');

  });



