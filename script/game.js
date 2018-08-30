function init_img_subs (alist, target) {
 for (var el of alist) {
  $(el[0]).hover (
   function () {
    $(target).toggleClass(el[1]);
   });
 }
}

// init_img_subs (image,"#bg");
