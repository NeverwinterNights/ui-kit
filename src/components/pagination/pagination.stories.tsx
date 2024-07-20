import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  component: Pagination,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=1787-9974&mode=dev',
    },
  },
  tags: ['autodocs'],
  title: 'UI Components/Pagination',
}

export default meta

const PaginationWithHooks = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState('8')
  const TOTAL_PAGES_COUNT = 10

  return (
    <Pagination
      count={TOTAL_PAGES_COUNT}
      onChange={setPage}
      onPerPageChange={setPerPage}
      page={page}
      perPage={perPage}
      perPageOptions={[5, 8, 12, 100]}
      perPageString={'per page'}
      selectPlaceholder={'Select Box'}
      showString={'show'}
    />
  )
}

export const Default = {
  render: () => <PaginationWithHooks />,
}
