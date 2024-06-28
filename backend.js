document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-secondary');
    const boxes = document.querySelectorAll('.custom-box');
    const gapInput = document.getElementById('gapValue');
    const growInputs = [
        document.getElementById('growBox1Input'),
        document.getElementById('growBox2Input'),
        document.getElementById('growBox3Input')
    ];

    function handleButtonClick(event) {
        const targetId = event.target.id;

        if (targetId === 'resetFlexbox') {
            container.style.flexDirection = 'row';
            container.style.justifyContent = 'flex-start';
            container.style.alignItems = 'stretch';
            container.style.gap = '0px';
            boxes.forEach(box => box.style.flexGrow = '0');
            gapInput.value = 0;
            growInputs.forEach(input => input.value = 0);
        } else if (targetId === 'directionRow') {
            container.style.flexDirection = 'row';
        } else if (targetId === 'directionColumn') {
            container.style.flexDirection = 'column';
        } else if (targetId === 'justifyStart') {
            container.style.justifyContent = 'flex-start';
        } else if (targetId === 'justifyCenter') {
            container.style.justifyContent = 'center';
        } else if (targetId === 'justifyEnd') {
            container.style.justifyContent = 'flex-end';
        } else if (targetId === 'justifySpaceBetween') {
            container.style.justifyContent = 'space-between';
        } else if (targetId === 'justifySpaceAround') {
            container.style.justifyContent = 'space-around';
        } else if (targetId === 'justifySpaceEvenly') {
            container.style.justifyContent = 'space-evenly';
        } else if (targetId === 'alignStart') {
            container.style.alignItems = 'flex-start';
        } else if (targetId === 'alignCenter') {
            container.style.alignItems = 'center';
        } else if (targetId === 'alignEnd') {
            container.style.alignItems = 'flex-end';
        } else if (targetId === 'setGap') {
            container.style.gap = `${gapInput.value}px`;
        } else if (targetId === 'growReset') {
            boxes.forEach(box => box.style.flexGrow = '0');
            growInputs.forEach(input => input.value = 0);
        } else if (targetId === 'growAll') {
            boxes.forEach(box => box.style.flexGrow = '1');
        } else if (targetId === 'growBox1') {
            boxes[0].style.flexGrow = growInputs[0].value;
        } else if (targetId === 'growBox2') {
            boxes[1].style.flexGrow = growInputs[1].value;
        } else if (targetId === 'growBox3') {
            boxes[2].style.flexGrow = growInputs[2].value;
        }
    }

    document.querySelector('.container-main').addEventListener('click', handleButtonClick);
});
