import { Link } from 'react-router-dom'
import '../../screens/JournalReaderScreen/JournalThreeStyle.css'

function JournalTitleComp(props){
    return(
        <div className='journal_title_comp_wrapper'>

            <div className='journal-link'>
                <Link to='/journal'>Journal </Link>
                <Link to={`/journal/${props.link}`}>
                / {props.linkTitle}
                </Link>
            </div>


            <div className='journal_title'>
                <div> {props.journalTitle} </div>
            </div>

            <div className='journal_author_wrap'>
                <img src='/favicon.svg' alt='author_image' />
                <span className='journal_author_attr'>Akiiko</span>
                <span className='journal_author_attr'>{props.date}</span>
                <span className='journal_author_attr'>{props.readMins}</span>
            </div>

        </div>
    )
}

function LinkProduct(props){
    return(
        <Link
            to={props.link}
            target='_blank'
            >
            <span>
                <em>
                <u>{props.children}</u>
                </em>
            </span>
        </Link>
    );
}

function JournalParaTitleComp(props){
    return(
        <div>
            <h4>{props.children}</h4>
        </div>
    );
}

function JournalParaComp(props){
    return(
        <div>
            <p>{props.children}</p>
        </div>
    )
}


function OneImageComp(props){
    return(
        <div className='one_image_comp_wrapper'>
            <Link to='/'>
                <img src={props.imgSrc} alt='img' />
            </Link>
        </div>
    );
}

function TwoImageComp(props){
    return(
        <div className='two_image_comp_wrapper'>
            <Link to={props.link1} target='_blank'>
                <img src={props.imgSrc1} alt='img' />
                <p>{props.img1TTitle}</p>
            </Link>
            <Link to={props.link2} target='_blank'>
                <img src={props.imgSrc2} alt='img' />
                <p>{props.img2TTitle}</p>
            </Link>
        </div>
    );
}

export { JournalTitleComp, LinkProduct, JournalParaTitleComp, JournalParaComp, OneImageComp, TwoImageComp};