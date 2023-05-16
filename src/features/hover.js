


export function onHover () {
    const name = document.getElementById('title');
    const hero = document.getElementById('hero')
    document.getElementById('title').addEventListener("mouseover", (event) => {
        setTimeout(()=> {
            hero.style.display = 'flex';

        },2000)
        
        
    });


    

}

