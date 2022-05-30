import { Currency, ETHER, Token } from '@pancakeswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'PHI'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
