import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'
import SmileImage from '../images/smile.png'

const Center = styled.div`
  ${tw`flex h-screen justify-center items-center`};
`
const Container = styled.div`
  ${tw`flex px-16`};
`
const Half = styled.div`
  ${tw`w-1/2`};
`

const Left = styled(Half)`
  ${tw`pr-10`};
`
const Right = styled(Half)`
  ${tw`px-8`};
  > * {
    ${tw`my-8`};
  }
`

const Title = styled.h1`
  ${tw`text-5xl max-w-xs`};
`

const Input = styled.input`
  ${tw`border-none w-full text-pink`};
  border-bottom: 2px solid;
  ${tw`border-pink-lightest py-1 font-medium outline-none`}
`

const Img = styled.img`
  width: 100%;
  height: auto;
  ${tw`block m-0 p-0`};
`
const Button = styled.button`
  border: 2px solid;
  ${tw`border-black px-4 py-2 font-semibold bg-white`};
  float: right;
`
const FloatingYear = styled.div`
  ${tw`absolute pin-r pin-t mr-10 mt-10 flex justify-center items-center`};
`
const Credits = styled.div`
  ${tw`absolute pin-b pin-r mb-4 mr-10 flex justify-center items-center text-grey-darker text-xs`};
`

const IndexPage = () => (
  <Layout>
    <FloatingYear>——— 2018. </FloatingYear>
    <Credits>
      Designed by chemagarcia_es • Developed by muhajirframe
    </Credits>
    <Center>
      <Container>
        <Left>
          <Img src={SmileImage} alt="" />
        </Left>
        <Right>
          <Title>Be a happy new user.</Title>
          <Input placeholder="NAME" />
          <Input placeholder="E-MAIL" />
          <Input placeholder="PASSWORD" />
          <Button>I'M READY -></Button>
        </Right>
      </Container>
    </Center>
  </Layout>
)

export default IndexPage
