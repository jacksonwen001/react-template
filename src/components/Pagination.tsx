import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { DOTS, usePagination } from '../hooks/usePagination';

const Pagination = (props: {
  current: number,
  size: number,
  total: number,
  onPageChange: (v: any) => void
}) => {
  const { current, size, total, onPageChange } = props
  const paginationRange = usePagination({
    current,
    size,
    total,
    siblingCount: 1
  })


  if (current === 0 || paginationRange.length < 2) {
    return null
  }
  const onNext = () => {
    onPageChange(current + 1)
  }

  const onPre = () => {
    onPageChange(current - 1)
  }
  let lastPage = paginationRange![paginationRange.length - 1]
  return (
    <div className='flex gap-2'>
      <a onClick={onPre} className='inline-flex justify-center items-center p-2 w-10 text-xs border-solid border border-gray-400 cursor-pointer'>
        <RiArrowLeftLine />
      </a>
      {paginationRange.map((value, index) => (
        <div key={index}>
          {value === DOTS 
            ? (<a >...</a>) 
            : (<a className={current == value ? `cursor-pointer bg-gray-500 inline-flex items-center justify-center border-solid border border-gray-400 p-2 text-xs w-10 text-white` : "inline-flex items-center justify-center border-solid border border-gray-400 p-2 text-xs w-10 cursor-pointer"} onClick={() => onPageChange(value)}>{value}</a>)}
          </div> 
      ))}
      <a onClick={onNext} className='inline-flex justify-center items-center p-2 w-10 text-xs border-solid border border-gray-400 cursor-pointer'>
        <RiArrowRightLine />
      </a>
    </div>
  );
}

export default Pagination;
