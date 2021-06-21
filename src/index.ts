import * as _ from 'lodash';

function testComponent() {
    const element = document.createElement("div");
    element.innerHTML = _.join(['Hello', 'World'], ' ');
    return element;
}


document.body.appendChild(testComponent());

