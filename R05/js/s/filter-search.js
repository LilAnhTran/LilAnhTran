(function () {
  var $imgs = $('gallery img');
  var $search = $('#filter-search');
  var cache = [];

  $imgs.each(function9() {
    cache.push({
      Element: this,
      Text: this.value.trim().toLowerCase()
    });
  });
  function filter() {
    var query = this.value.trim().toLowerCase();
    cache.forEach(function (img) {
      var index = 0;
      if (query) {
        index = img.text.index0f(query);
      }
      img.Element.style.display = index === -1 ? 'none' : '';

    });
  }
  if ('oniput' in $search[0]) {
    $search.on('input', filter);
  } else {
    $search.on('keyup', filter);
  }

}());