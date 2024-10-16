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
  formSubmit('[data-form-cb]', document.getElementById('registration-approve'), function () {});
  formSubmit('[data-subscribe]', document.getElementById('subscribe-success'), function () {});

  //way 2
  new Modal('fff1').setAdditionalLogicAfterSubmit(function (wrapper) {
    formSubmit('[data-form="review"]', null, function (fd) {
      var _wrapper$querySelecto;
      var reviewSuccess = "<div class=\"result-modal\">\n            <div class=\"result-modal__icon\">\n            <svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M31.9987 10.6666C20.2166 10.6666 10.6654 20.2178 10.6654 31.9999C10.6654 43.782 20.2166 53.3333 31.9987 53.3333C43.7808 53.3333 53.332 43.782 53.332 31.9999C53.332 20.2178 43.7808 10.6666 31.9987 10.6666ZM5.33203 31.9999C5.33203 17.2723 17.2711 5.33325 31.9987 5.33325C46.7263 5.33325 58.6654 17.2723 58.6654 31.9999C58.6654 46.7275 46.7263 58.6666 31.9987 58.6666C17.2711 58.6666 5.33203 46.7275 5.33203 31.9999ZM44.437 23.3402C45.5378 24.3186 45.6369 26.0041 44.6585 27.1049L30.4362 43.1049C29.9302 43.6742 29.2048 43.9999 28.4431 43.9999C27.6814 43.9999 26.9561 43.6742 26.4501 43.1049L19.3389 35.1049C18.3605 34.0041 18.4596 32.3186 19.5604 31.3402C20.6611 30.3617 22.3467 30.4609 23.3251 31.5616L28.4431 37.3194L40.6723 23.5616C41.6507 22.4609 43.3363 22.3617 44.437 23.3402Z\" fill=\"#1eb2e8\"></path>\n            </svg>\n            </div>\n            <div class=\"result-modal__title\">\u041E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D!</div>\n            <div class=\"result-modal__desc\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F!</div>\n        </div>";
      var tempContainer = document.createElement('div');
      tempContainer.innerHTML = reviewSuccess;
      (_wrapper$querySelecto = wrapper.querySelector('.modal-form__wrapper')) === null || _wrapper$querySelecto === void 0 || _wrapper$querySelecto.replaceWith(tempContainer.firstChild);
    });
  });
});