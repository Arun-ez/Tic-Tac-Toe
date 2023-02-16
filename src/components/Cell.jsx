
const Cell = ({value,clicked,id}) => {
    return (
        <div onClick={clicked} id={id}> {value} </div>
    );
}


export default Cell;