const timelineHandler = () => {
    let dots = document.querySelectorAll('.linha-item-circulo');
    let inativeLine = document.querySelectorAll('.circulo-reta-inativo');
    let displayInfo = document.querySelectorAll('.display-item');

    inativeLine.forEach((elem, index) => {
        elem.style.zIndex = `${100+index}`;
    });

    let state = {
        dot: 0
    }

    const displayContent = () => {
        console.log(state);
        displayInfo.forEach(elem => {
            elem.style.display = "none";
        });

        displayInfo[state.dot].style.display = "initial";
    }

    const colorDots = () => {
        dots.forEach(elem => {
            elem.style.backgroundColor = "#C4C4C4";
        });

        for(let i = 0; i <= dots.length && i <= state.dot; i++){
            dots[i].style.backgroundColor = "#1DAFD6"; 
        }

    }

    const displayInativeLines = () => {
        inativeLine.forEach(elem => {
            elem.style.display = "block";
        });

        for(let i = 0; i < inativeLine.length && i < state.dot; i++){
            inativeLine[i].style.display = "none";
        }
    }

    const refreshAll = () => {
        displayContent();
        colorDots();
        displayInativeLines();
    }

    const setState = (data) => {
        for(let i in data){
            state[i] = data[i];
        }

        refreshAll();
    }

    dots.forEach((elem, index) => {
        elem.onclick = () => {
            setState({dot: index})
        }
    });

    setState({dot: 0})
}

timelineHandler();