import React from 'react'

export default function JournalCardCMP(props) {

    const JournalCardImageComp = () => {
        return(
            <div className='journal-card-img-wrapper'>
                <img src={props.src} alt={`${props.title}`} />
            </div>
        );
    }


    const JournalCardDateAndReadMinsComp = () => {
        return(
            <div className='journal-card-date-read-mins-wrapper'>
                <p>{props.date}</p>
                <p>{props.read}</p>
            </div>
        );
    }

    const JournalCardTitleComp = () => {
        return(
            <h6>{props.title}</h6>
        );
    }

    const JournalCardSampleContents = () => {
        return(
            <p>{props.content}</p>
        );
    }

    const JournalCardReadMoreButton = () => {
        return(
            <h6>Read More</h6>
        );
    }


    return (
        <div className='journal-card-cmp-wrapper'>
            <JournalCardImageComp />

            <div className='journal-card-details-cmp'>
                <JournalCardDateAndReadMinsComp />

                <JournalCardTitleComp />
                
                <JournalCardSampleContents />

                <JournalCardReadMoreButton />
            </div>
        </div>
    )
}
