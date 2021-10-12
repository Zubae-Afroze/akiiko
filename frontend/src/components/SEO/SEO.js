import React , { useState , useEffect} from 'react'
import {Helmet} from "react-helmet"

export default function SEO({title, desc = [], keywords=[], fallbackTitle}) {

    const [metatags, setMetaTags] = useState([])

    useEffect(() => {
        const meta = [];
        
        if(desc.length !== 0){
            desc.forEach((data) => {
                meta.push({
                    name: `description`,
                    content: data,
                })
            });
        }else{
            meta.push({
                name: `description`,
                content: "Live a clutter-free lifestyle. Categorized as home decor, utility products, storage bags - this eco-friendly collection of lifestyle products are available on akiiko's website. Shop now at akiiko.",
            })
        }

        if(keywords.length !== 0){
            keywords.forEach((data) => {
                meta.push({
                    name: `keywords`,
                    content: data,
                })
            });
        }else{
            meta.push({
                name: `keywords`,
                content: "Ecofriendly",
            })
        }

        setMetaTags(meta)
    }, [])

    const metaTitle = () => {
        if(title){
            return title;
        }else{
            return fallbackTitle;
        }
    }
    
    return (
        <Helmet 
            title = {metaTitle()}
            htmlAttributes={{ lang: "en" }}
            meta={[...metatags]}
            data-react-helmet="true"
        />
    )
}
