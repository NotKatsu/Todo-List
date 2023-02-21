import Head from 'next/head'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { Card, Grid, Text, Container, Input, Button, Divider, Spacer, Row, Tooltip } from "@nextui-org/react";


const todos: string[] = [];

const checkTodos = () => {
  if (todos.length === 0) {
    return <Text h4 css={{ "marginLeft": "auto", "marginRight": "auto", "fontWeight": "500" }}>Please add a Todo for it to show here...</Text>;
  }
}


export default function Home() {
  return (
    <>
      <Container display="flex" justify="center" alignItems="center" css={{ "minHeight": "40vh",}}>
        <Card css={{ "mw":"700px", "shadow": "none", "bg": "#2A2B2B" }}>
          <Grid.Container>
            <Card.Body>
              <Text h2 css={{ "marginLeft": "auto", "marginRight": "auto" }}>Add a todo</Text>
              <Divider/>
              <Spacer y={2} />
              <Row>
                <Input size="lg"  animated={false} css={{ "width": "100%", display: "inline-block" }} placeholder="Add a todo..." />
                <Tooltip content={"Confirm"} hideArrow css={{ "borderRadius": "10px" }}>
                <Button auto css={{ "bg": "#16181A", "color": "#38d976", "marginLeft": "$sm"}}><BsCheck2 size={24}/></Button>
                </Tooltip>

                <Tooltip content={"Cancel"} hideArrow css={{ "borderRadius": "10px" }}>
                  <Button auto css={{ "bg": "#16181A", "color": "#d93848", "marginLeft": "$xs"}}><RxCross2 size={24}/></Button>
                </Tooltip>
              </Row>
            </Card.Body>
          </Grid.Container>
        </Card>
      </Container>

      <Container display="flex" justify="center" alignItems="center">
        <Card css={{ "mw":"700px", "shadow": "none", "bg": "#2A2B2B" }}>
          <Grid.Container>
            <Card.Body>
              <Text h2 css={{ "marginLeft": "auto", "marginRight": "auto" }}>Todo List</Text>
              <Divider/>
              <Spacer y={1} />
                
            </Card.Body>
          </Grid.Container>
            {checkTodos()}
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
