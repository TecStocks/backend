const db = {
  "Username": "Natália Moraes",
  "Login": "nmoraes",
  "Password": "308650",
  "Equipment": "Lamborghini, Ferrari"
}
const table = [  {
    "Username": "João Pedro",
    "Login": "jpedro",
    "Password": "501358",
    "Equipment": "Mercedes, BMW, Porsche"
  },
  {
    "Username": "Maria Silva",
    "Login": "msilva",
    "Password": "917401",
    "Equipment": "Mercedes, Lamborghini"
  },
  {
    "Username": "Natália Moraes",
    "Login": "nmoraes",
    "Password": "308650",
    "Equipment": "Lamborghini, Ferrari"
  }]

  // console.log(table[0].Login)
  let users = []
  // i = table.length
  for ( let index = 0; index < table.length; index++){
    console.log(table[index].Login)
  //     if (db.Login === table[index].Login)
  //     console.log('repetido')
  //     // users.push(table[index])
  }
  console.log(table.length)

  // console.log(users)
// await PocConfig.findOneAndUpdate({ _id: pocConfigToEdit._id }, pocConfigToEdit)