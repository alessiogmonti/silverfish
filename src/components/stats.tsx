import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

export const Stats = ({title, amount, type } : {title, amount : string, type?: 'increase'|'decrease'}) => {
  return (

      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatArrow type={type} mb={'1px'} flexDirection={'column'} display={'inline-flex'}/>
        <StatNumber flexDirection={'column'} display={'inline-flex'} >
          {amount}
        </StatNumber>
      </Stat>
  )
}