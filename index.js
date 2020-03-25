
const msg = document.querySelector('div.tooltip');
const span = document.createElement('span');
msg.addEventListener('mouseover', getMsg);
function getMsg() {
    span.setAttribute('class', 'tooltip-content');
    span.innerHTML = msg.getAttribute('data-tooltip');
    msg.append(span);
}
msg.addEventListener('mouseout', outMsg);
function outMsg() {
    span.parentNode.removeChild(span);
}
