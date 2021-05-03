

let buttons = $('.button')


    buttons.each((index,button)=>{
        
        $(button).click(()=>{
            
            let id = parseInt($(button).attr('id')) +1;
            
            $(button).children().toggleClass('bold')
            $(`#${id}`).toggleClass('hidden')
           
        })
    })


