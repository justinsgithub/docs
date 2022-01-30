type GreetProps = {
    name: string;
    dateDay: Number;
    month: string;
    year?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
    const { year = 22 } = props
    return (
        <div> 
            <h2>Welcome {props.isLoggedIn ? props.name : 'Guest'}, today is day {props.dateDay} of {props.month} {props.year ? props.year : year }</h2>
    </div>
    )
}
