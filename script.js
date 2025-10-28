document.addEventListener('DOMContentLoaded', () => {
  const messageElement = document.getElementById('message');
  const changeButton = document.getElementById('changeBtn');
  const inputElement = document.getElementById('msgInput');
  const applyButton = document.getElementById('applyBtn');
  const countElement = document.getElementById('count');
  const themeButton = document.getElementById('themeBtn');

  let clickCount = 0;

  if (changeButton && messageElement) {
    const offText = messageElement.textContent || 'This is sample text for my website';
    const onText = 'Alternate message is now active!';

    changeButton.addEventListener('click', () => {
      messageElement.classList.toggle('alt');
      const isAlt = messageElement.classList.contains('alt');
      messageElement.textContent = isAlt ? onText : offText;

      clickCount += 1;
      if (countElement) {
        countElement.textContent = String(clickCount);
      }
    });
  }

  if (applyButton && inputElement && messageElement) {
    applyButton.addEventListener('click', () => {
      const value = inputElement.value.trim();
      if (value) {
        messageElement.textContent = value;
      }
    });
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle('theme-dark');
    });
  }
});
