/*
const {caltip,fahrenheitToCelsius,celsiusToFahrenheit} =require('../src/tip')
test('hello world',()=>{
const total=caltip(10,.3)
expect(total).toBe(13)

})

test('should ',()=>{
const baseFtoC=fahrenheitToCelsius(32)
expect(baseFtoC).toBe(0)
})*/
const jwt=require('jsonwebtoken')
const request=require('supertest')
const mongoose = require('mongoose')
const app=require('../src/app')
const User=require('../src/models/user')

const userOneId=new mongoose.Types.ObjectId()
const userOne={
_id: userOneId,
name:'himanshu',
email:'himanshu.ajwani96@gmail.com',
password:'12345644',
tokens:[{
token:jwt.sign({_id:userOneId},'thisisme')

}]
}

beforeEach(async()=>{

await User.deleteMany()
await new User(userOne).save()
})



test('express',async()=>{
 
const response=await request(app).post('/users').send({
name:"ram",
email:"himanshu@gmail.com",
password:"1234567"
}).expect(201)
const user= await User.findById(response.body.user._id)
expect(user).not.toBe(null)
  expect(response.body).toMatchObject({
        user: {
            name: 'ram',
            email: 'himanshu@gmail.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('12345644')
})

test('logintest',async()=>{
const response=await request(app).post('/users/login').send({
   email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('authentocation',async ()=>{
await request(app).get('/users/me').
set('Authorization',`Bearer ${userOne.tokens[0].token}`)
.send()
.expect(200)
})






