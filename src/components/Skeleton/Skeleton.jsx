import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { Grid } from '@mui/material'
import { Container } from '@mui/system'

export default function Skeletons() {
    return (

        <Container maxWidth={false}>
            <Skeleton variant="rounded" width="100%" height={100} sx={{ margin: "1.5em" }} />
            <Skeleton variant="rounded" width="100%" height={100} sx={{ margin: "1.3em" }} />
            <Skeleton variant="rounded" width="100%" height={100} sx={{ margin: "1.3em" }} />
            <Skeleton variant="rounded" width="100%" height={100} sx={{ margin: "1.3em" }} />
            <Skeleton variant="rounded" width="100%" height={100} sx={{ margin: "1.3em" }} />
        </Container>
    );
}