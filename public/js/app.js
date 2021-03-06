const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

requestLink.addEventListener('click', () => {
    requestModal.classList.add('open');
});

requestModal.addEventListener('click', (e) => {
    if(e.target.classList.contains('new-request')) {
        requestModal.classList.remove('open');
    }
});

//say hello
const button = document.querySelector('.call');
button.addEventListener('click', () => {
    const sayHello = firebase.functions().httpsCallable('sayHello');
    sayHello({ name: 'RJniemela'}).then(result => {
        console.log(result.data);
    });
});