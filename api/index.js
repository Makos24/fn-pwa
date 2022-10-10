import express from 'express'
import prisma from '../lib/prisma'
const app = express()

app.use(express.json())

/** 
* logic for our api will go here
*/


app.get('/chips', async (req, res) => {
    const chips = await prisma.chip.findMany()
    res.json(chips)
  })

app.post('/chip', async (req, res) => {
  const { edd, phone, name } = req.body
  const post = await prisma.chip.create({
    data: {
      edd,
      phone,
      name,
      
    }
  })
  res.status(200).json(post)
})


app.get('/births', async (req, res) => {
    const births = await prisma.birth.findMany()
    res.json(births)
  })

app.post('/birth', async (req, res) => {
  var arr = JSON.parse(req.body);
  let births = {};
  //console.log(arr);
  arr.forEach(element=>{
    const {edd, phone, ffname, fmname, fsname, state } = element;
    births.push({
      name: ffname,
      phone: phone,
      edd: edd
    });

  });
   
    const createMany = await prisma.birth.createMany({
      data: births,
      skipDuplicates: true, // Skip
    })

    res.status(200).json(createMany)

    // const birth = prisma.birth.create({
    //   data: {
    //     name: ffname,
    //     phone: phone,
    //     edd: edd
        
    //   }
    // })



  // create
// const createManyBirths = arr.map((el) => {
//   const {edd, phone, ffname, fmname, fsname, state } = el
//     prisma.birth.create({
//     data: {
//             name: ffname,
//             phone: phone,
//             edd: edd
//           }
// });

// })

//   Promise.all(createManyBirths);

  // console.log(createManyBirths);
  // res.json(createManyBirths);

})


  
export default {
  path: '/api',
  handler: app
}