import React from "react";
import Box, {BoxParagraph, BoxContent, BoxTitle} from "./box";

function AfficheBox ({name, price, src, dimension, size=""} ) {

    return(
        <div className="column">
            <Box background="info">
                <BoxContent>
                    <BoxTitle title={name} />
                    <figure className={"image" + size} >
                        <img className="zoom" src={src} alt={name} />
                    </figure>
                    <BoxParagraph>
                        <br/>
                        <p><em>{dimension}</em> - <em>{price}</em></p>
                    </BoxParagraph>
                </BoxContent>
            </Box>
        </div>
    );
}

export default AfficheBox;