import { ReactElement } from 'react'

import s from './pagination.module.scss'

import { ArrowLeft, ArrowRight } from '../../assets'
import { Select } from '../select'
import { usePagination } from './use-pagination'

export type PaginationProps = {
  count: number
  onChange: (pageNumber: number) => void
  onPerPageChange?: (itemPerPage: string) => void
  page: number
  perPage?: string
  perPageOptions?: number[]
  perPageString: string
  selectPlaceholder: ReactElement | string
  showString: string
  siblings?: number
}
export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage,
  perPageOptions,
  perPageString,
  selectPlaceholder,
  showString,
  siblings,
}: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({ count, onChange, page, siblings })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={s.root}>
      <div className={s.container}>
        <button className={s.item} disabled={isFirstPage} onClick={handlePreviousPageClicked}>
          <span className={s.icon}>
            <ArrowLeft />
          </span>
        </button>

        {paginationRange.map((el: number | string, index) => {
          if (typeof el !== 'number') {
            return (
              <span className={s.dots} key={index}>
                &#8230;
              </span>
            )
          }

          return (
            <button
              className={`${s.item} ${el === page && s.selected}`}
              disabled={el === page}
              key={index}
              onClick={handleMainPageClicked(el)}
            >
              {el}
            </button>
          )
        })}

        <button className={s.item} disabled={isLastPage} onClick={handleNextPageClicked}>
          <span className={s.icon}>
            <ArrowRight />
          </span>
        </button>
      </div>
      {showPerPageSelect && (
        <div className={s.selectBox}>
          {showString}
          <Select
            onChange={onPerPageChange}
            options={perPageOptions?.map(el => ({ label: `${el}`, value: `${el}` }))}
            placeholder={selectPlaceholder}
            value={perPage}
          />
          {perPageString}
        </div>
      )}
    </div>
  )
}
