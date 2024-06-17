import { Dispatch } from "react";

type TableHeaderProps = {
    isOpen?:  boolean
    name: string;
    label?: string
    filterType: string;
    filterValues?: any
    handleOpenChange: (isOpen: boolean, filterType: string) => void
    handleFilterChange?: (key: string, value: string) => void
    resetFilter?: () => void
    setIsOpen?: Dispatch<React.SetStateAction<boolean>>
     
}

type RenderFilterContentProps = {
    isOpen?:  boolean
    name?: string;
    filterType?: string;
    filterValues: any
    handleOpenChange?: (isOpen: boolean, filterType: string) => void
    handleFilterChange?: (key: string, value: string) => void
     
}