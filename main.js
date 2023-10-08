function submitted(e) {
    e.preventDefault();

    const fields = {
        "esasy": '"'+ document.forms[0]['q1'].value +'"',
        "filetype": document.forms[0]['q2'].value,
        "inurl": document.forms[0]['q3'].value,
        "intext": document.forms[0]['q4'].value,
        "intitle": document.forms[0]['q5'].value,
        "site": document.forms[0]['q6'].value,
        "map": document.forms[0]['q7'].value,
        "link": document.forms[0]['q8'].value,
        "daterange": document.forms[0]['q9'].value,
    };

    let query = [];


    Object.entries(fields).forEach(entry => {
        [key, val] = entry;
        

        if (key == "esasy" && val != "") {
            query.push(val);
        } else {
            if (val != "") {
                let words = val.split(' ').join(' ' +'OR'+' '+ key + ':');
                query.push(key + ":" + words);
            }
          
        }
    });

    query = query.join(' ');
    window.open("https://google.com/search?q=" + query, '_blank');
}


document.querySelector('input[type=button]').addEventListener('click', (e) => { submitted(e) });




