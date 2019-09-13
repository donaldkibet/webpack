import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack']);
    element.classList.add('hello');

    const myicon = new Image();
    myicon.src = Icon;
    
    element.appendChild(myicon);

    _.map(Data,(_data)=>{
        console.log(data);
    });

    return element;
}

document.body.appendChild(component());