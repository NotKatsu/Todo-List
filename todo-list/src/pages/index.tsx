import Head from 'next/head'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { Card, Grid, Text, Container, Input, Button, Divider, Spacer, Row, Tooltip } from "@nextui-org/react";


const todos: string[] = [];
todos.push("Eat my 5 a day.")
todos.push("Make breakfast.")
todos.push("Go shopping and buy bread, milk and butter.")

const todoCount= () => {
  if (todos.length === 0) {
    return 0
  } else {
    return todos.length
  }
}

const checkTodos = () => {
  if (todos.length === 0) {
    return <Text h4 css={{ "marginLeft": "auto", "marginRight": "auto", "fontWeight": "500" }}>Please add a Todo for it to show here...</Text>;
  } else {
    return null
  }
}


const removeTodo = (todo: string) => {
  console.log(todo)
  //delete todos[todoID]; 
}

const clearAll = () => {
  while (todos.length > 0) {
    todos.pop();
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
              <Row>
                <Text h2 css={{ "marginLeft": "auto", "marginRight": "31%" }}>Todo List</Text>

                <Tooltip content={"Clear All"}>
                  <Button auto onPress={() => (clearAll())} css={{ "bg": "#16181A", "color": "#d93848", "marginLeft": "auto", "marginTop": "$sm"}}><RxCross2 size={24}/></Button>
                </Tooltip>
              </Row>
              <Divider/>
              <Spacer y={1} />
                
            </Card.Body>
          </Grid.Container>
            {checkTodos()}
            
            {todos.map(todo => (
              <Text h4 css={{ "marginLeft": "$lg", "fontWeight": "500" }}>
                <Row>
                {todo}
                <Button key={todo} auto onPress={() => console.log("Hello There from the button on the fucking thingy")} css={{ "bg": "#16181A", "color": "#d93848", "marginLeft": "auto", "marginRight": "$sm"}}><RxCross2 size={24}/></Button>
                </Row>
                <Spacer y={0.5} />
                <Divider/>
                <Spacer y={0.5} />
                </Text>
            ))}

            

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
