import { useAppContext } from '@/@context/AppContextProvider'

interface Props {
  children: React.ReactNode
}

export const AuthWrapper = ({ children }: Props) => {
  const { isClientAuthenticated } = useAppContext()
  return isClientAuthenticated === true ? <>{children}</> : <></>
}

export default AuthWrapper
