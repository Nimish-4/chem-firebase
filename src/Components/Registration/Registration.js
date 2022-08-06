import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"
import {database} from '../../firebase'
import {ref,push,child,update} from "firebase/database";
import { getDatabase, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import app from '../../firebase'

export default function Registration() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()
  const {signup}  = useAuth()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  const { currentUser } = useAuth()



  
  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    
    try {
      
      setError("")
      setLoading(true)
      const val = await signup(emailRef.current.value, passwordRef.current.value)
      //await login(emailRef.current.value, passwordRef.current.value)

      const db = getDatabase();
      set(ref(db, 'users/' + val.user.uid), {
        username: nameRef.current.value,
        email: emailRef.current.value
      })


      /*
      signup(emailRef.current.value, passwordRef.current.value)

      .then(login(emailRef.current.value, passwordRef.current.value))
      .then(  
      set(ref(db, 'users/' + currentUser.userId), {
      username: nameRef.current.value,
      email: emailRef.current.value
    })  )
    ;*/

    /*
    const db = getFirestore(app);


    const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    */

    history("/")

    } 
    catch {

      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            
            <Form.Group id="name">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>

          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}