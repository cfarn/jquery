$(function(){
    $('aside a').click(function(event){
        // alert('clic');
        // j'annule le clic sur le lien 
        event.preventDefault();
        console.log($(this).attr('href'));

        var monHref = $(this).attr('href');

        $('figure img').attr("src", monHref);

        // récupérer dans une variable le title des images vignettes puis changer le contenu de figcaption avec cette variable

        // var monTitle = $(this).attr('title');
        // $('figcaption h3').html(monTitle);

        $('figcaption h3').html($(this).attr('title'));
    });

    
});

