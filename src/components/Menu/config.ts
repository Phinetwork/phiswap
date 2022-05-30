import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.phiswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'Buy PHI(Φ)',
        href: 'https://buy.phi.holdings/product/%cf%86/',
      },
      {
        label: 'Charts & Analytics',
        href: 'https://info.phiswap.com',
      },
      {
        label: 'Get Started Guide',
        href: 'https://phiswap.org/start',
      },
      {
        label: 'Documentation',
        href: 'https://docs.phi.network/phi-wiki/layer-1-dapps/phiswap',
      },
      {
        label: 'Create New Token',
        href: 'https://app.phitoken.com',
      },
      {
        label: 'PHI Network',
        href: 'https://phi.network',
      },
      {
        label: 'Block Explorer',
        href: 'https://explorer.phi.network',
      },
    ],
  },
 
]

export default config
