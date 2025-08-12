import modalContent from './modal.html?raw'

import './styles.css'

export function createModal(container = window.document.body){
    const parser = new DOMParser();
    const { body } = parser.parseFromString(modalContent, 'text/html')

    if(!body.firstElementChild)
        return

    container.append(body.firstElementChild)
}