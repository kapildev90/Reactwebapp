import React from 'react'
import CIcon from '@coreui/icons-react'
import {

  cilDrop,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavItem,
    name: 'Add Company',
    to: '/companyAdd',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },



]

export default _nav
