function init_img_subs (alist, target) {
  alist.forEach (function (element) {
    $(element[0]).hover (
      function () {
        $(target).toggleClass (element [1]);
      }
    );


  });
}
