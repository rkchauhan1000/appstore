import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  console.log("IN TOKENENENEN")
  return jwt.sign({ id }, 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0Mjg1ODY3MiwiaWF0IjoxNjQyODU4NjcyfQ.rt4TW-sYEmbmFFjPoHQzUIw7GoahuwpHoo8Z3-1n6J0', {
    expiresIn: '30d',
  })
}

export default generateToken
