type GroceryListProps<T> = {
    groceries: T[] 
    onClick: (value: T) => void;
}

export const GroceryList = <T extends string | number>({ groceries, onClick}: GroceryListProps<T>) => {
    return (
        <div>
            <h2>Grocery List</h2>
            {groceries.map((grocery, index) => {
                return (
                    <div key={index} onClick={() => onClick(grocery)}> 
                        {grocery}
                    </div>
                )
            })}
    </div>
    )
}
