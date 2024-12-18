let xhr = new XMLHttpRequest();

xhr.open('get', './rockbands.json', false)

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.response);
        let band = document.getElementById('band');
        // console.log(data.beatles);
        for (let b in data) {

            let option = document.createElement('option');
            option.value = b;
            option.innerHTML = b;
            band.appendChild(option)
        }
        let artest = document.getElementById('artest');

        band.addEventListener('change',()=>{
            // console.log('lolooooool');
            let selected = band.value;
            console.log(selected);
            let arts =data[selected];
            
            artest.replaceChildren();
            
            for(let a of arts){
                let option = document.createElement('option');
                option.value = a.value;
                option.innerHTML = a.name;
                artest.appendChild(option)
            }
            
        })
        artest.addEventListener('change',()=>{
            let selected = artest.value;
            window.open(selected);
        })

    }

}
xhr.send()