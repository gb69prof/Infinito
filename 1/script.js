let step = 0;

const steps = [
    {
        video: `<iframe width="560" height="315" src="https://app.heygen.com/embeds/80a738af59a54ac4854af0caa6ac82b7" frameborder="0" allowfullscreen></iframe>`,
        rightImage: "Web app.png"
    },
    {
        video: `<iframe width="560" height="315" src="https://app.heygen.com/embeds/fca197ee78624c64a1a305a815de8f16" frameborder="0" allowfullscreen></iframe>`,
        rightImage: "sensismo.png"
    },
    {
        video: `<iframe width="560" height="315" src="https://app.heygen.com/embeds/380604e1f22d41c8aa7b9528beccc688" frameborder="0" allowfullscreen></iframe>`,
        rightImage: "doni-Natura.png"
    },
    {
        video: `<iframe width="560" height="315" src="https://app.heygen.com/embeds/757db22e21d546408ecbdc8f983e33dc" frameborder="0" allowfullscreen></iframe>`,
        rightImage: "teoria-suono-vista.png"
    },
    {
        video: `<iframe width="560" height="315" src="https://app.heygen.com/embeds/13fe907898574ca8bf304b9f023cab0d" frameborder="0" allowfullscreen></iframe>`,
        rightImage: "idillio.png"
    }
];

function renderStep() {
    document.getElementById("videoContainer").innerHTML = steps[step].video;
    document.getElementById("rightImage").src = steps[step].rightImage;
}

function nextStep() {
    if (step < steps.length - 1) {
        step++;
        renderStep();
    }
}

function prevStep() {
    if (step > 0) {
        step--;
        renderStep();
    }
}

renderStep();
