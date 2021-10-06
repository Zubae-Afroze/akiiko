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