import React from "react";
import Box, {BoxImage, BoxParagraph, BoxContent, BoxTitle} from "./box";

function ArtBox ({ name="", price, src, alt} ) {

    return(
        <Box background="info">
            <BoxContent>
                <BoxTitle title={name} />
                <BoxParagraph>
                    <p><em>{price}</em></p>
                </BoxParagraph>
                <BoxImage src={src} alt={alt} size="is-4by5"/>    
            </BoxContent>
        </Box>
    );
}

export default ArtBox;