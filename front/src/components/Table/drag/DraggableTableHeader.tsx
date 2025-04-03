import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import { TableStyles } from 'types';

interface DraggableTableHeaderProps {
    id: string;
    children: React.ReactNode;
    $tableStyles: TableStyles;
}

const StyledTh = styled.th<{ $tableStyles: DraggableTableHeaderProps['$tableStyles'] }>`
    cursor: grab;
    touch-action: none;
    user-select: none;
    background-color: ${props => props.$tableStyles.headerBackground};
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid ${props => props.$tableStyles.borderColor};
    font-weight: 600;
    color: #333;
    will-change: transform;
    position: relative;
    z-index: 1;

    &:hover {
        background-color: ${props => props.$tableStyles.headerHoverBackground};
    }

    &:active {
        cursor: grabbing;
    }
`;

 export const DraggableTableHeader = ({ id, children, $tableStyles }: DraggableTableHeaderProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
    } = useSortable({ 
        id,
        transition: null,
        data: {
            type: 'header',
            id
        }
    });

    const style = {
        transform: transform ? CSS.Transform.toString(transform) : undefined,
        opacity: isDragging ? 0.9 : 1,
        zIndex: isDragging ? 2 : 1,
        position: 'relative' as const,
        boxShadow: isDragging ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        backgroundColor: isDragging ? $tableStyles.headerHoverBackground : undefined,
        touchAction: 'none' as const,
        userSelect: 'none' as const,
        willChange: 'transform'
    };

    return (
        <StyledTh ref={setNodeRef} style={style} {...attributes} {...listeners} $tableStyles={$tableStyles}>
            {children}
        </StyledTh>
    );
};
