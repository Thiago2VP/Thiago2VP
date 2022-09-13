export default function apear(elements) {
    let duration = 500;
    for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
            let element = document.querySelector(`${elements[i]}`);
            element.style.display = 'initial';
        }, duration);
        duration += 700;
    }
}
