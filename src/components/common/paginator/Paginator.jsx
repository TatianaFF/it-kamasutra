import React, { useState } from 'react'
import s from "./Paginator.module.css"

export let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pageNumbers = []
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    let pagesElements = pageNumbers
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map(p => (
            <span key={ p } className={ currentPage === p && s.selectedPage }
                  onClick={ (e) => onPageChanged(p) }> { p }</span>
        ))

    return (
        <div>
            { portionNumber > 1 && <button onClick={ () => setPortionNumber(portionNumber - 1) }>PREV</button> }
            { pagesElements }
            { portionCount > portionNumber &&
                <button onClick={ () => setPortionNumber(portionNumber + 1) }>NEXT</button> }
        </div>
    )
}