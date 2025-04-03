import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { TableStyles } from 'types';

interface DraggableTableRowProps {
    id: string;
    children: React.ReactNode;
    $tableStyles: TableStyles;
}

const StyledTr = styled.tr<{ 
    $tableStyles: DraggableTableRowProps['$tableStyles'];
    $isDragging?: boolean;
    $transform?: string;
}>`
    transform: ${props => props.$transform || 'none'};
    z-index: ${props => props.$isDragging ? 1 : 0};
    position: relative;
    transition: transform 0.2s ease;

    &:hover {
        background-color: ${props => props.$tableStyles.rowHoverBackground};
    }
`;

export const DraggableTableRow = ({ id, children, $tableStyles }: DraggableTableRowProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
    } = useSortable({ 
        id,
        transition: null
    });

    return (
        <StyledTr 
            ref={setNodeRef} 
            {...attributes} 
            {...listeners} 
            $tableStyles={$tableStyles}
            $isDragging={isDragging}
            $transform={transform ? CSS.Transform.toString(transform) : undefined}
        >
            {children}
        </StyledTr>
    );
};
