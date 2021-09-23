function $(el){
    console.log("this is a test "+ " " + el);
    return document.querySelector(el);
}



let container = $('.container');
let toggle = $('#toggle-theme');
let main = $(".main")

toggle.addEventListener('click', () => {
    let list = container.classList;

    if(list.contains('default')){
        list.toggle('dark');
    }else{
        list.toggle('default');
    }
})


function $(test){
    console.log("testing now" + test);
    return document.querySelector(test);
}



// $('#toggle-theme').click( function(){
//     let list = container.classList;

//     if(list.contains('default')){
//         list.replace('default', 'dark');
//     }else{
//         list.replace('dark', 'default');
//     }
// });