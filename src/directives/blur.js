const blur = {};

/*
* el => elemento html y todas sus propiedades
* binding => Contiene el valor que se le pasa a la directiva
* */
function setBlur(el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none';
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit';
  el.title = !binding.value ? 'Esta canción no se puede escuchar.' : '';

  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true);
    } else {
      button.removeAttribute('disabled');
    }
  });
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding){
      setBlur(el, binding);
    }
  })
};

export default blur;
