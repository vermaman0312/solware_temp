'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cn } from '@/utils/cn';

type props = {
    children?: React.ReactNode;
    cardClassName?: string;
    contentClassName?: string;
}

const MuiCard = ({ ...props }: props) => {
    return (
        <Card variant="elevation" className={cn(`w-full bg-white border-none shadow-md`, props.cardClassName)}>
            <CardContent className={cn(`bg-white border-none`, props.contentClassName)}>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default MuiCard;