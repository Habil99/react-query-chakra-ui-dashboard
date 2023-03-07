import Pagination from "rc-pagination"

interface CustomPaginationProps {
    total: number
    current: number
    onChange: (page: number) => void
}

const CustomPagination = ({ total, current, onChange }: CustomPaginationProps) => {
    return (
        <Pagination
            total={total}
            current={current}
            pageSize={10}
            onChange={onChange}
        />
    )
}

export default CustomPagination;