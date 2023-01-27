const list =[
    {id:1,
    charityName:"CHILDRENS CHORUS OF SPRINGFIELD",
     Amount: 4000}
]
const getNextId = ((id) => () => ++id)(1);
export { list, getNextId }