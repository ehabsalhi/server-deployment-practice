'use strict';

const supertest = require("supertest")
const app = require('../../../server')
const req = supertest(app)


describe('server test' , () =>{
     it('test 404' , async () => {
          const res = await req.get('/pageNotFound')
          expect(res.status).toBe(404)
     })

     it('test Home page', async() =>{
          const res = await req.get('/')
          expect(res.status).toBe(200)
     })

     it('test 500 error' ,async () => {
          const res = await req.get('/bad')
          expect(res.status).toBe(500)
     })
})