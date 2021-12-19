function Button (props) {

    return (
        <>
            <button onClick={props.filterHandler} type="button" className="btn btn-light">{props.type}</button>
        </>
    )
}

export default Button; 