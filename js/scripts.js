function filterSelection(tag) {
  var items = document.getElementsByClassName('item');

  // Show all items if 'all' is selected
  if (tag === 'all') {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('show');
    }
    return;
  }

  // Hide all items
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('show');
  }

  // Show items with the selected tag
  var selectedItems = document.getElementsByClassName(tag);
  for (var i = 0; i < selectedItems.length; i++) {
    selectedItems[i].classList.add('show');
  }
}
