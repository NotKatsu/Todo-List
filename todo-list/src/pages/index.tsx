import Head from 'next/head'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { Card, Grid, Text, Container, Input, Button, Divider, Spacer, Row } from "@nextui-org/react";


export default function Home() {
  const todos: string[] = [];
  todos.push("Go shopping and buy eggs, milk and butter.")
  todos.push("Learn to code a simple todo app in nextjs.")
  
  return (
    <>
      <Container display="flex" justify="center" alignItems="center" css={{ "minHeight": "100vh" }}>
        <Card css={{ "mw":"700px", "shadow": "none", "bg": "#2A2B2B" }}>
          <Grid.Container>
            <Card.Body>
              <Text h2 css={{ "marginLeft": "auto", "marginRight": "auto" }}>Todo List</Text>
              <Divider/>
              <Spacer y={2} />
              <Row>
                <Input size="lg"  animated={false} css={{ "width": "100%", display: "inline-block" }} placeholder="Add a todo..." />
                <Button auto css={{ "bg": "#16181A", "color": "#38d976", "marginLeft": "$sm"}}><BsCheck2 size={24}/></Button>
                <Button auto css={{ "bg": "#16181A", "color": "#d93848", "marginLeft": "$xs"}}><RxCross2 size={24}/></Button>
              </Row>
            </Card.Body>
          </Grid.Container>

          <Grid.Container>

          </Grid.Container>

          <Grid.Container>
            <Card.Footer>
              <Text css={{ color: "#737272", "marginLeft": "auto", "marginRight": "auto" }}>Made with ❤️ by Katsu</Text>
            </Card.Footer>
          </Grid.Container>
        </Card>
      </Container>
    </>
  )
}
