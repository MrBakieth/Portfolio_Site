const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', handleCopyEmail);

const emailText = 'yamanfurki08@gmail.com';

function handleCopyEmail() {
navigator.clipboard.writeText(emailText)
    .then(() => {
    alert('Email copied to clipboard!');
    })
    .catch((error) => {
      // Log any errors to the console
    console.error('Error copying email to clipboard:', error);
    });
}
