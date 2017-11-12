import Quill from 'quill';

$(document).ready(() => {
  new Quill('#post-editor', {
    theme: 'snow',
  });
  const $postForm = $('#post-form');
  if ($postForm) {
    $postForm.on('submit', () => {
      const content = $('.ql-editor').html();
      $('#content-input').val(content);
    });
  }
});
