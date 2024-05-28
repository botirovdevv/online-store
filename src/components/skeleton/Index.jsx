import { Box } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function Index() {
    return (
        <div className="skeleton">
            <Box sx={{ width: 170, marginRight: 0.5, my: 5 }}>
                <Skeleton variant="rectangular" width={170} height={132} />
                <Skeleton variant="text" width={100} height={30} />
                <Skeleton variant="text" width={80} height={30} />
                <Skeleton variant="text" width={70} height={30} />
                <Skeleton variant="text" width={170} height={50} />
            </Box>
        </div>
    )
}

export default Index