export let chauffer = (x) => {
    if (x.temperature < 100) {
        x.temperature += 20
        setTimeout(()=>{
            console.log(`La tempertaure est a ${x.temperature}`);
            chauffer(x)
        },1000)
    } else {
        console.log(`La bouilloire s'est eteinte`);
    }
};