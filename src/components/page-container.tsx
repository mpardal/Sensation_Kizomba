import { PropsWithChildren } from 'react'

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="m-4 mb-20">{children}</div>
}

export default PageContainer
