import { GlobalThemeOverrides } from 'naive-ui'

export const theme = {
  primaryLight: '#3264d6',
  primary: '#063190',
  primaryHover: '#062772'
}

export const lightTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: theme.primary
  },
  Button: {
    textColor: theme.primary
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: theme.primary
      }
    }
  },
  Pagination: {
    itemColorActive: theme.primary,
    itemColorActiveHover: theme.primaryLight,
    itemTextColorActive: '#fff',
    itemTextColorHover: theme.primary
  }
}
