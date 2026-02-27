export default ({valor, setValor, id}) => {
  return(
    <div style={{display: 'flex', flexDirection: 'row-reverse', marginBottom: 20}}>
      <label htmlFor={id} style={{marginLeft: 8, border: '1px solid black', padding: 4}}>
        Digite:
      </label>
    </div>
  )
}