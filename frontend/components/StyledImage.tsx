import { styled } from '@mui/material/styles'

export const StyledImage = styled('img')(({ theme }) => ({
  borderRadius: theme.spacing(1),
  objectFit: 'cover'
}))
