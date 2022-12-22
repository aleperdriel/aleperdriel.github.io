function onSubmit(e) {
    e.preventDefault();
    
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === '') {
        alert('We will need more than that!');
        return;
    }

    generateImageRequest(prompt, size);
} 

async function generateImageRequest(prompt, size) {

    try {
        showSpinner();

        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        if(!response.ok) {
            hideSpinner();
            throw new Error('This image could not be generated');
        }
        
        const data = await response.json();
        
        const imageUrl = data.data;

        document.querySelector('#image').src = imageUrl;
        hideSpinner();

    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }

}


function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}


function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}
document.querySelector('#image-form').addEventListener('submit', onSubmit);