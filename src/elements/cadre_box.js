import React from "react";
import Box, {BoxImage, BoxParagraph, BoxContent} from "./box";

function CadreBox ({price, src, alt} ) {

    return(
        <Box background="info">
            <BoxContent>
                <BoxParagraph>
                    <p><em>{price}</em></p>
                </BoxParagraph>
                <BoxImage src={src} alt={alt}/>     
            </BoxContent>
        </Box>
    );
}

export default CadreBox;