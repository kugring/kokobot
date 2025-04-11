import styled from "styled-components"
import { BiChevronRight, BiChevronsRight, BiChevronLeft, BiChevronsLeft } from "react-icons/bi"
import { useState } from "react"
import SelectBox from "../SelectBox/SelectBox"

interface PaginationProps {
    pageIndex: number
    pageCount: number
    pageUnit?: string
    setPageIndex: (pageIndex: number) => void
    pageSizeOptions?: number[]
    pageSize?: number
    setPageSize?: (pageSize: number) => void
}

const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100]

const Pagination = ({ 
    pageIndex, 
    pageCount, 
    setPageIndex, 
    pageUnit,
    pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    pageSize = 10,
    setPageSize
}: PaginationProps) => {
    const [inputPage, setInputPage] = useState("")

    // 페이지 이동 로직
    const canPreviousPage = pageIndex > 0
    const canNextPage = pageIndex < pageCount - 1

    const previousPage = () => {
        if (canPreviousPage) {
            setPageIndex(pageIndex - 1)
        }
    }

    const nextPage = () => {
        if (canNextPage) {
            setPageIndex(pageIndex + 1)
        }
    }

    // 페이지 크기 변경 핸들러
    const handlePageSizeChange = (value: string) => {
        if (setPageSize) {
            setPageSize(Number(value))
        }
    }

    // 입력된 페이지로 이동하는 함수
    const goToPage = () => {
        const page = parseInt(inputPage)
        
        // 입력값이 숫자가 아닌 경우
        if (isNaN(page)) {
            setInputPage("")
            return
        }
        
        // 입력값이 범위를 벗어난 경우
        if (page < 1) {
            setPageIndex(0)
        } else if (page > pageCount) {
            setPageIndex(pageCount - 1)
        } else {
            setPageIndex(page - 1)
        }
        
        setInputPage("")
    }

    // 숫자만 입력 가능하도록 처리
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        // 숫자만 허용
        if (value === "" || /^[0-9]+$/.test(value)) {
            setInputPage(value)
        }
    }

    // 엔터 키 이벤트 처리
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            goToPage()
        }
    }

    // 페이지 번호 생성 로직
    const getPageNumbers = () => {
        const totalPages = pageCount
        const currentPage = pageIndex
        const pageNumbers = []

        // 현재 페이지 기준으로 양옆 2개씩 표시
        const range = 2

        // 시작 페이지와 끝 페이지 계산
        let startPage = Math.max(0, currentPage - range)
        let endPage = Math.min(totalPages - 1, currentPage + range)

        // 페이지 번호 추가
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }

        return pageNumbers
    }

    return (
        <FooterBox>
            <LeftBox>
                <PageInfo>
                    Total {pageCount} / {pageIndex + 1}
                </PageInfo>
                {setPageSize && (
                    <PageSizeSelector>
                        <SelectBox 
                            options={pageSizeOptions} 
                            unit={pageUnit} 
                            defaultValue={pageSize.toString()}
                            onChange={handlePageSizeChange} 
                        />
                    </PageSizeSelector>
                )}
                <PageJumpBox>
                    <PageJumpInput 
                        value={inputPage} 
                        onChange={handleInputChange} 
                        onKeyDown={handleKeyPress} 
                        placeholder="페이지 입력"
                        inputMode="numeric"
                        pattern="[0-9]*" 
                    />
                    <JumpButton onClick={goToPage}>이동</JumpButton>
                </PageJumpBox>
            </LeftBox>

            <PageControlGroup>
                <PageButtonGroup>
                    <PageButton onClick={() => setPageIndex(0)} disabled={!canPreviousPage}>
                        <BiChevronsLeft />
                    </PageButton>
                    <PageButton onClick={previousPage} disabled={!canPreviousPage}>
                        <BiChevronLeft />
                    </PageButton>
                    <PageNumberGroup>
                        {getPageNumbers().map((page) => (
                            <PageNumberButton key={page} onClick={() => setPageIndex(page)} $isActive={pageIndex === page}>
                                {page + 1}
                            </PageNumberButton>
                        ))}
                    </PageNumberGroup>
                    <PageButton onClick={nextPage} disabled={!canNextPage}>
                        <BiChevronRight />
                    </PageButton>
                    <PageButton onClick={() => setPageIndex(pageCount - 1)} disabled={!canNextPage}>
                        <BiChevronsRight />
                    </PageButton>
                </PageButtonGroup>
            </PageControlGroup>
        </FooterBox>
    )
}

export default Pagination

const FooterBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    flex-wrap: wrap;
`

const LeftBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const PageInfo = styled.div`
    color: #666;
    font-size: 14px;
    min-width: 100px;
`

const PageSizeSelector = styled.div`
    min-width: 120px;
`

const PageJumpBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const PageControlGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const PageJumpInput = styled.input`
    width: 84px;
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;

    &:focus {
        outline: none;
        border-color: var(--color-indigo-300);
    }
`

const JumpButton = styled.button`
    padding: 6px 12px;
    background-color: var(--color-indigo-100);
    color: #666;
    border: 1px solid var(--color-indigo-200);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.1s ease;

    &:hover {
        color: #fff;
        background-color:  var(--color-indigo-400);
    }
`

const PageButtonGroup = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const PageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    border: 1px solid var(--color-indigo-100);
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;

    &:hover:not(:disabled) {
        background-color: var(--color-indigo-75);
        border-color: var(--color-indigo-200);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

const PageNumberGroup = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    min-width: 200px;
`

const PageNumberButton = styled(PageButton)<{ $isActive: boolean }>`
    min-width: 32px;
    padding: 6px 8px;
    background-color: ${(props) => (props.$isActive ? "var(--color-indigo-100)" : "white")};
    color: ${(props) => (props.$isActive ? "#333" : "#333")};
    border-color: ${(props) => (props.$isActive ? "var(--color-indigo-200)" : "transparent")};

    &:hover:not(:disabled) {
        background-color: ${(props) => (props.$isActive ? "var(--color-indigo-200)" : "var(--color-indigo-75)")};
        border-color: var(--color-indigo-200);
    }
`
