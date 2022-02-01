import React from 'react'
import { Container, Header, HeaderTitle, Content } from './styles'
import { LayoutProps } from './types'

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <Container {...props}>
      <Header>
        <HeaderTitle as="p">BankClient</HeaderTitle>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}
