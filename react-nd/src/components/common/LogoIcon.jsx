import { Box } from "@chakra-ui/react"
import iconLogo from '@/assets/icon.svg'

export const LogoIcon = (props) => {
  return (
    <Box {...props}>
      <img src={iconLogo} alt="Home Service Icon" />
    </Box>
  )
}
