import React from "react";
import Box, {BoxParagraph, BoxContent, BoxTitle} from "./box";

function ArtBox ({ name="", price, src, alt, size=" is-4by5"} ) {

    return(
        <Box background="info">
            <BoxContent>
                <BoxTitle title={name} />
                <BoxParagraph>
                    <p><em>{price}</em></p>
                </BoxParagraph>
                <figure className={"image" + size} >
                    <img className="zoom" style={{borderRadius:"10%"}} src={src} alt={alt} />
                </figure>    
            </BoxContent>
        </Box>
    );
}

export default ArtBox;