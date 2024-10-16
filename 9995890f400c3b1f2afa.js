var formSubmit = function formSubmit(selector) {
  var nextStep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var successFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var errorFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var form = document.querySelector("".concat(selector));
  if (form) {
    var validator = new FormValidator(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var fd = new FormData(form);
      validator.submit(function () {
        if (nextStep) {
          var _form$closest;
          var item = nextStep.content.cloneNode(true);
          (_form$closest = form.closest('[data-replace-wrapper]')) === null || _form$closest === void 0 || _form$closest.replaceWith(item);
        }
        if (successFunc) {
          successFunc(fd);
        }
      }, function () {
        if (errorFunc) {
          errorFunc();
        }
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function (event) {
  // formSubmit('[data-form-cb]', document.getElementById('registration-approve'), () => {});
  formSubmit('#calc-form', function () {}, function () {});
  new Modal('video-modal');
  new Modal('video-block2');
});