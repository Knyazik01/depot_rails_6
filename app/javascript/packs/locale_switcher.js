document.addEventListener('turbolinks:load', () => {
  const submitLocaleTag = document.getElementById('submit_locale_change');
  submitLocaleTag && (submitLocaleTag.style.display = 'none');
});