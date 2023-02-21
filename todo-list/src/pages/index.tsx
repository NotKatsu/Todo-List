import Head from 'next/head'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useForm } from 'react-hook-form';
import { useCallback, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie, hasCookie, deleteCookie, getCookie } from 'cookies-next'
import { Card, Grid, Text, Container, Input, Button, Divider, Spacer, Row, Tooltip, useInput } from "@nextui-org/react";


const todos: string[] = [];
const cookieTodos = getCookie("storedTodos")

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

const todoList = () => {
  return (
    <Card css={{ "mw":"700px", "shadow": "none", "bg": "#2A2B2B" }}>
    <Grid.Container>
      <Card.Body>
        <Text h2 css={{ "marginLeft": "auto", "marginRight": "auto" }}>Todo List</Text>
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
  )
}


export default function Home() {
  const {reset, bindings} = useInput("");
  const { register, handleSubmit} = useForm();

  const result = hasCookie("storedTodos")
  console.log(result)

  const onSubmit = useCallback(async (data) => {
    if (todos.length <= 9) {
      todos.push(data["todoInput"])

      const toGive: string[] = todos 
      
      if (hasCookie("storedTodos") === false) {
        setCookie("storedTodos", toGive)
      } else {
        deleteCookie("storedTodos")
        setCookie("storedTodos", toGive)
      }
      const result = getCookie("storedTodos")
      console.log(result)
    }
  }, []);

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
                <Input size="lg" {...register("todoInput")} animated={false} css={{ "width": "100%", display: "inline-block" }} placeholder="Add a todo..." />
                <Tooltip content={"Confirm"} hideArrow css={{ "borderRadius": "10px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Button auto type="submit" css={{ "bg": "#16181A", "color": "#38d976", "marginLeft": "$sm"}}><BsCheck2 size={24}/></Button>
                </form>
                </Tooltip>

                <Tooltip content={"Cancel"} hideArrow css={{ "borderRadius": "10px" }}>
                  <Button auto onPress={() => reset()} css={{ "bg": "#16181A", "color": "#d93848", "marginLeft": "$xs"}}><RxCross2 size={24}/></Button>
                </Tooltip>
              </Row>
            </Card.Body>
          </Grid.Container>
        </Card>
      </Container>

      <Container display="flex" justify="center" alignItems="center">
        {
          todoList()
        }
      </Container>
    </>
  )
}
