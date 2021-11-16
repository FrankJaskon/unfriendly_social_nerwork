import React, {useEffect, useState} from 'react';
import CustomButton from '../buttons/submit/custom-button';

import s from './Pagination.module.sass';

const Pagination = React.memo(({totalPagesNumber, usersNumber, paginatorTotalCount, currentPage,
    showNumberPage, showNextPage, showNextTenPage, showPrevPage, showPrevTenPage, isTop}) => {

    const getLastArrayIndex = (array) => array.length - 1;

    const lastPageNumber = Math.ceil(totalPagesNumber / usersNumber),
        newTotalCountPaginator = (paginatorTotalCount && paginatorTotalCount >= 4) ? paginatorTotalCount : 9,
        averagePaginatorNumber = newTotalCountPaginator - 2,
        lastPeriodStart = lastPageNumber - averagePaginatorNumber;

    const [newPaginationArray, setNewPaginationArray] = useState([]);

    useEffect(() => {
        const startArrayWithDots = (array) => [array[0], <span className={s.dots} key='afterStart'>...</span>];
        const endArrayWithDots = (array) => [<span className={s.dots} key='beforeEnd'>...</span>, array[getLastArrayIndex(array)]];
        const createPaginationNumberArray = (propsObject) => {
            const {currentPage, averagePaginatorNumber, newTotalCountPaginator,
                lastPeriodStart, startArrayWithDots, endArrayWithDots, lastPageNumber} = propsObject;

            const condition = currentPage + averagePaginatorNumber;
            let numbers = [1];

            if (currentPage && currentPage <= 2) {
                for (let i = 2; i <= newTotalCountPaginator; i++) {
                    numbers.push(i);
                }
            } else if (currentPage && currentPage >= lastPeriodStart) {
                for (let i = lastPeriodStart; i <= lastPageNumber; i++) {
                    numbers.push(i);
                }
                numbers = [...startArrayWithDots(numbers), ...numbers.slice(1)];
            } else if (currentPage) {
                for (let i = currentPage; i < condition; i++) {
                    numbers.push(i);
                }
                numbers.push(lastPageNumber);
                numbers = [...startArrayWithDots(numbers),
                    ...numbers.slice(1, getLastArrayIndex(numbers)), ...endArrayWithDots(numbers)];
                }
                const pageReferences = numbers.map(page => (typeof(page) === 'number')
                ? <span key={page} onClick={() => {showNumberPage(page)}}
                className={+page === +currentPage ? s.selectedPage : ''}>{page}</span>
                : page);
            return pageReferences;
        }
        setNewPaginationArray(createPaginationNumberArray({currentPage, averagePaginatorNumber, newTotalCountPaginator,
            lastPeriodStart, startArrayWithDots, endArrayWithDots, lastPageNumber}));
    }, [currentPage, lastPageNumber, newTotalCountPaginator,
        averagePaginatorNumber, lastPeriodStart, showNumberPage]);

    return <div className={isTop ? s.paginationWrapperTop : s.paginationWrapperBottom}>
        <div className={s.additionalWrapper}>

            {currentPage !== 1
                ? <div className={s.buttonsGroup}>
                    {currentPage > 10
                    ? <CustomButton wrapClassName={s.wrapperTenStyle} btnClassName={s.prevTenButtonStyle}
                        text={'<<'} callbackOnClick={showPrevTenPage} />
                    : null}
                    <CustomButton wrapClassName={s.wrapperStyle}
                        text={'Previous'} callbackOnClick={showPrevPage} />
                </div>
                : null}
            <div className={s.pageReferencesWrapper}>
                {newPaginationArray}
            </div>
            {currentPage !== lastPageNumber
            ? <div className={s.buttonsGroup}>
                    <CustomButton wrapClassName={s.wrapperStyle} text={'Next'} callbackOnClick={showNextPage} />
                    {currentPage < (lastPageNumber - 10)
                            ? <CustomButton wrapClassName={s.wrapperTenStyle} btnClassName={s.nextTenButtonStyle}
                                text={'>>'} callbackOnClick={showNextTenPage} />
                        : null}
                </div>
            : null}
        </div>
    </div>
});

export default Pagination;