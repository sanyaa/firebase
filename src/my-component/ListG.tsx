import React, {useState} from "react";


//create interface Props with List and fn
interface Props {
    List: number[];
    fn: () => void;
    fn1: (item: string) => void;
    //optional ?      //possible vals
    option?     : 'a' | 'b';
}


export function ListG({List, fn, fn1, option}: Props) {



    const [selectedItem, setSelectedItem] = useState(0)


    return (
        <>
            <ul className="list-group">
                {List.map((item, index) => {
                    return <li className="list-group-item" onClick={() => setSelectedItem(index)}>{item}-{selectedItem}</li>
                })}

            </ul>

            <ul className="list-group">
                {List.map((item, index) => {
                    return <li className="list-group-item" onClick={() =>  fn1("item-"+index)}>{"item" + index}-{selectedItem} - {item}</li>
                })}

            </ul>

            <ul className="list-group">
                {List.map(item =>  <li key={item} className="list-group-item"
                                       onClick={(e : React.MouseEvent) => console.log(e.target)}>
                    {item}
                </li>)}
            </ul>

            <button onClick={fn}>
                fn
            </button>

            <button onClick={() =>  fn1("fn1-item")}>
                fn1 - {option}
            </button>

        </>
    );
}
