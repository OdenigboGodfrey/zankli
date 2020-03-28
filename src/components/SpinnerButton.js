import React, { useState } from "react";
import { Button, Text, Spinner } from "native-base";
import { Colours } from "./../utils";

export const SpinnerButton = (props) => {
    // const [value, setValue] = useState();
    // setValue({btnClicked: props.btnClicked});
    return(
        <Button
        rounded={props.rounded}
        block={props.block}
        style={props.style}
        onPress={props.onPress}
        > 
            {
                props.btnClicked == false ?
                    <Text style={[{textAlignVertical: 'center', textAlign: 'center', width: '100%',}]}>{props.label}</Text>
                :
                    <Spinner style={[{height: 30, alignSelf: 'center', width: '100%'}]} color={Colours.white} />
            }
            
        </Button>
    );
}