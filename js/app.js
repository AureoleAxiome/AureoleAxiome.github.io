const bag = new rive.Rive({
    src: "assests/baganimated.riv",
    canvas: document.getElementById("bag"),
    autoplay: true,
    stateMachines: 'Manager',
    fit: rive.Fit.cover,
    onLoad: () => {
        const inputs = bag.stateMachineInputs('Manager')
        const trigger = inputs.find(i => i.name === 'Click')
        document.getElementById("bag").onclick = (e) =>{
            e.preventDefault();
            trigger.fire();
        }
    }
});

const head = new rive.Rive({
    src: "assests/head.riv",
    canvas: document.getElementById("head"),
    autoplay: false,
    fit: rive.Fit.cover,
});

const tree = new rive.Rive({
    src: "assests/tree.riv",
    canvas: document.getElementById("area"),
    autoplay: false,
    fit: rive.Fit.cover,
});

const fertlizer = new rive.Rive({
    src: "assests/fertilizer.riv",
    canvas: document.getElementById("author"),
    autoplay: true,
    stateMachines: 'thothening',
    fit: rive.Fit.cover,
    onLoad: () => {
        const input = fertlizer.stateMachineInputs('thothening')
        const triggers = input.find(k => k.name === 'beatYEET')
        document.getElementById("me").onclick = (e) =>{
            e.preventDefault();
            triggers.fire();
        }
    }
});