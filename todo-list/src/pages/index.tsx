import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Card, Grid, Text, Container, Input, Button, Divider, Spacer, Table } from "@nextui-org/react";


export default function Home() {
  return (
    <>
      <Container display="flex" justify="center" alignItems="center" css={{ "minHeight": "100vh" }}>
        <Card css={{ "mw":"700px", "shadow": "none", "bg": "#2A2B2B" }}>
          <Grid.Container>
            <Card.Body>
              <Text h2 css={{ "marginLeft": "auto", "marginRight": "auto" }}>Todo List</Text>
              <Divider/>
              <Spacer y={2} />
              <Input size="lg"  animated={false} css={{ "width": "80%", "marginLeft": "auto", "marginRight": "auto" }} placeholder="Add a todo..." />
            </Card.Body>
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
