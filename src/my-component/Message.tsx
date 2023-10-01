import {useEffect, useState} from "react";

const Message = () => {
    return (
        <>
            <p className="text-3xl font-bold underline">
                Pello world!
            </p>

            <div className="p">
                <StateVal/>
            </div>
        </>
    );
};

//

export const StateVal= () => {


    const [stateVal, setstateVal] = useState(11   );


    useEffect(() => {
        setstateVal(stateVal + 1)
    }, [])


    /**
     * Note:
     * - [] runs just once,
     * - blank renders/runs every time state change
     * - givenstate renders every time givenstate change
     */

    const resetVal = () => {
        setstateVal(11)
    }


    return (
        <>

            <p>State Val </p> {stateVal}

            <button onClick={resetVal} >
                RESET VAL
            </button>
        </>
    );
};

export default Message
// write code to export Message component

