import { randomSubjectSelector } from "./subject-names.js"

export function fillSubjectNames(selector)
{
    let subjects = document.querySelectorAll(selector);
    if (!subjects?.length) { alert('returned'); return;}

    for (let subject of subjects) {
        subject.innerHTML = randomSubjectSelector.next();
    }
}