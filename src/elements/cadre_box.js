import React from "react";
import Box, {BoxParagraph, BoxContent} from "./box";

function CadreBox ({price, src, alt} ) {

    return(
        <Box background="info">
            <BoxContent>
                <BoxParagraph>
                    <p><em>{price}</em></p>
                </BoxParagraph>
                <figure className="image is-4by5" >
                    <img className="zoom" src={src} alt={alt} />
                </figure>    
            </BoxContent>
        </Box>
    );
}

export default CadreBox;