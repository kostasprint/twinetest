function init_img_subs (alist, target) {
 for (el of alist) {
   console.log (el);
   console.log ("ciaone");
  $(el[0]).hover (
   function () {
    $(target).toggleClass(el[1]);
   });
 }
}
