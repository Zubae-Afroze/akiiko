export default function templateOne(cardsElementTemplate,titleSubtitleElementTemplate){
    return(
        `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    box-sizing: border-box;
                }
                

                .heading{
                    margin-bottom: 0;
                    color: #3e3331;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .content{
                    color: #473f3d;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .product_card_wrapper{
                    border: 1px solid rgb(201, 201, 201);
                    background-color: #f6f1ea;
                    
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .product_card_wrapper img {
                    width: 100%;
                    object-fit: cover;
                }

                .product_card_wrapper > p {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                    color: #3e3331;
                }

                .product_card_wrapper button {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    padding: 0.3rem 1rem 0.3rem 1rem;
                    border: none;
                    color: #f6f1ea;
                    background-color: #977257;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                @media (min-width: 500px) {
                    .product_card_wrapper{
                        max-width: 300px;
                        margin-right: 10px;
                        display: inline-block;
                    }
                }
            </style>
        </head>
        <body>
            ${titleSubtitleElementTemplate}
            
            ${cardsElementTemplate}
        </body>
        </html>
        `
    );
}

function templateOneDup(cardsElementTemplate,titleSubtitleElementTemplate){
    return(
        `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    box-sizing: border-box;
                }
                
                body{
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 3rem;
                }


                .heading{
                    margin-bottom: 0;
                    color: #3e3331;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .content{
                    color: #473f3d;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .product_card_wrapper{
                    border: 1px solid rgb(201, 201, 201);
                    background-color: #f6f1ea;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .product_card_wrapper > p {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                    color: #3e3331;
                }

                .product_card_wrapper button {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    padding: 0.3rem 1rem 0.3rem 1rem;
                    border: none;
                    color: #f6f1ea;
                    background-color: #977257;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }
            </style>
        </head>
        <body>
            ${titleSubtitleElementTemplate}
            
            ${cardsElementTemplate}
        </body>
        </html>
        `
    );
}


function templateTwo(cardsElementTemplate,titleSubtitleElementTemplate){
    return(
        `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    box-sizing: border-box;
                }
                
                body{
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 3rem;
                }


                .heading{
                    margin-bottom: 0;
                    color: #3e3331;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .content{
                    color: #473f3d;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .product_card_wrapper{
                    border: 1px solid rgb(201, 201, 201);
                    background-color: #f6f1ea;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .product_card_wrapper img {
                    width: 100%;
                    object-fit: cover;
                }

                .product_card_wrapper > p {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                    color: #3e3331;
                }

                .product_card_wrapper button {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    padding: 0.3rem 1rem 0.3rem 1rem;
                    border: none;
                    color: #f6f1ea;
                    background-color: #977257;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }
            </style>
        </head>
        <body>

        <div style="width:100%;">
                <h2 class='heading'>New Products Has been Launched</h2>
                <p class='content'>We have launched 6 new products have a look at it</p>
            </div>

            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS001.jpg?alt=media&token=835c57a1-f00f-4e55-92d0-406d61d110e9' alt='alt Text' />
                <p>Product Title </p>
                <a href='https://www.akiiko.com/product/creme-bindle-bag'> 
                <button>SHOP NOW</button>
                </a>
            </div>
            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS001.jpg?alt=media&token=835c57a1-f00f-4e55-92d0-406d61d110e9' alt='alt Text' />
                <p>Product Title </p>
                <a href='https://www.akiiko.com/product/creme-bindle-bag'> 
                <button>SHOP NOW</button>
                </a>
            </div>
            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS001.jpg?alt=media&token=835c57a1-f00f-4e55-92d0-406d61d110e9' alt='alt Text' />
                <p>Product Title </p>
                <a href='https://www.akiiko.com/product/creme-bindle-bag'> 
                <button>SHOP NOW</button>
                </a>
            </div>
        </body>
        </html>
        `
        );
    }