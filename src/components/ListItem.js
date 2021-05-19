import React from 'react'

const ListItem = (props) => {

    const items = props.items;

    const listItem = items.map((item) => {
        return (
            <div className="list" key={item.key}>
                <p>{item.text}</p>
                <button
                    onClick={() => props.deleteItem(item.key)}>X</button>
            </div>
        );
    })

    return (
        <div className="listCon">
            {listItem}
        </div>
    )
}

export default ListItem;
