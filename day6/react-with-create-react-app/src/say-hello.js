
function SayHello(props) {
    return (
        <div>
         Hello  {(props.gender == 'Male') ? 'Mr' : 'Mrs'}
        {props.name}
        </div>
    )
}
export default SayHello