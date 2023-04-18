import { useAppContext } from '@/@context/AppContextProvider'

interface Props {
  children: React.ReactNode
}

export const AuthWrapper = ({ children }: Props) => {
  const { isClientAuthenticated } = useAppContext()

  if (isClientAuthenticated === true && isClientAuthenticated !== undefined) {
    return <>{children}</>
  } else {
    return null
  }
}

export default AuthWrapper
