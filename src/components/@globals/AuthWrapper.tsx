import { useAppContext } from '@/@context/AppContextProvider'

interface Props {
  children: React.ReactNode
}

const AuthWrapper = ({ children }: Props) => {
  const { isClientAuthenticated } = useAppContext()
  return isClientAuthenticated ? <>{children}</> : null
}

export default AuthWrapper
