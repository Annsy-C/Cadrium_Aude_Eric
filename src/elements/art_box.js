import React from "react";
import Box, {BoxParagraph, BoxContent, BoxTitle} from "./box";

function ArtBox ({ name="", price, src, alt, size=" is-4by5", solde=""} ) {

    return(
        <Box background="info">
            <BoxContent>
                <BoxTitle title={name} />
                <BoxParagraph>
                    <div className="columns">
                        <div className="column">
                            <strike>{solde}</strike>
                        </div>
                        <div className="column">
                            <p><em>{price}</em></p>
                        </div>
                    </div>
                </BoxParagraph>
                <figure className={"image" + size} >
                    <img className="zoom" style={{borderRadius:"10%"}} src={src} alt={alt} />
                </figure>    
            </BoxContent>
        </Box>
    );
}

export default ArtBox;