import React from "react";
import Box, {BoxParagraph, BoxContent, BoxTitle} from "./box";

function AfficheBox ({name, price, src, dimension} ) {

    return(
        <div className="column">
            <Box background="info">
                <BoxContent>
                    <BoxTitle title={name} />
                    <figure className="image" >
                        <img className="zoom" src={src} alt={name} />
                    </figure>
                    <BoxParagraph>
                        <p><em>{price}</em></p>
                        <p><em>{dimension}</em></p>
                    </BoxParagraph>
                </BoxContent>
            </Box>
        </div>
    );
}

export default AfficheBox;