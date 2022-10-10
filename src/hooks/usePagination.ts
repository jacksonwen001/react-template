import { useMemo } from "react";

const range = (start: number, end: number) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
};


export interface PaginationProps {
    current: number,
    size: number,
    total: number,
    siblingCount: 1
}

export const DOTS = '...'

export const usePagination = (props: PaginationProps) => {
    const { total, current, size, siblingCount} = props
    const paginationRange = useMemo(() => {
        let defaultPageRange: number[] = []

        const totalPageCount = Math.ceil(total / size); 
        const totalPageNumbers = siblingCount + 5 
        
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(current - siblingCount, 1)
        const rightSiblingIndex = Math.min(current + siblingCount, totalPageCount); 
        const showLeftDots = leftSiblingIndex > 2; 
        const showRightDots = rightSiblingIndex < totalPageCount - 2
        const firstPageIndex = 1; 
        const lastPageIndex = totalPageCount; 

        if(!showLeftDots && showRightDots) {
            let leftItemCount = 3 + 2 * siblingCount; 
            let leftRange = range(1, leftItemCount)
            return [...leftRange, DOTS, totalPageCount]; 
        }

        if(showLeftDots && !showRightDots) {
            let rightItemCount = 3 + 2 * siblingCount; 
            let rightRange = range(  
                totalPageCount - rightItemCount + 1,
                totalPageCount
            )
            return [firstPageIndex, DOTS, ...rightRange]; 
        }
        
        if(showLeftDots && showRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex); 
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]; 
        }

        return defaultPageRange

    }, [total, current, size, siblingCount]);
    return paginationRange; 
}