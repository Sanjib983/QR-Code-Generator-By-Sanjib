document.getElementById('generate-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value.trim();  // Trim whitespace

    if (text === '') {
        alert('Please enter valid text or URL to generate QR code.');
        return;
    }

    let qrcodeDiv = document.getElementById('qrcode');

    // Clear the previous QR code
    qrcodeDiv.innerHTML = '';

    // Generate a new QR code using QRCode constructor
    new QRCode(qrcodeDiv, {
        text: text,
        width: 128,
        height: 128
    });

    // Add the qr-code class to apply animation
    qrcodeDiv.classList.add('qr-code');

    console.log('QR code generated successfully!');
});

function changeTheme(theme) {
    const body = document.body; // Get the body element
    body.classList.remove('standard', 'light', 'darker'); // Remove existing theme classes

    // Add the new theme class
    if (theme === 'standard') {
        body.classList.add('standard');
    } else if (theme === 'light') {
        body.classList.add('light');
    } else if (theme === 'darker') {
        body.classList.add('darker');
    }
}
