function GoalItem({title, children}) {
    return (
        <>
            <li>
           {title}
            </li>
            <p>{children}</p>
        </>
    )
}

export default GoalItem;
