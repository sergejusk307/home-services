import { Box } from "@chakra-ui/react"
import iconLogo from '@/assets/icon.svg'

export default function LogoIcon(props) {
  return (
    <Box {...props}>
      <img src={iconLogo} alt="Home Service Icon" />
    </Box> 
  )
}
