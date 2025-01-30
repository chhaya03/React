//for money deposit
export const depositMoney=(amount)=>{
return(dispatch)=>{
  dispatch({
    type:'deposit',
    payload:amount
  })
}
}


//for money withdrawl
export const withdrawMoney=(amount)=>{

  return(dispatch)=>{
    dispatch({
      type:'deposit',
      payload:amount
    })
  }
}