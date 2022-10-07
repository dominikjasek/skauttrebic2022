import * as React from 'react'
import { motion } from 'framer-motion'

interface MenuToggleProps {
    toggle: () => void
}

const Path = (props: MenuToggleProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button
    style={{
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      top: '17.3px',
      right: '17px',
      borderRadius: '50%',
      background: 'transparent',
    }}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        // @ts-ignore
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        // @ts-ignore
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        // @ts-ignore
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </button>
)
