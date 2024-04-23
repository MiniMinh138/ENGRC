function filter(tag) {
  var items = document.querySelectorAll('.item');

  items.forEach(function (item) {
    if (tag === 'all' || item.classList.contains(tag)) {
      item.classList.remove('hide'); // Show item
    } else {
      item.classList.add('hide'); // Hide item
    }
  });
}


