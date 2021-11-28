import React from "react";
import Box, { BoxContent, BoxTitle, BoxImage, BoxParagraph} from "./box";

function EvenementBox ({ title, description, src, alt} ) {

    return(
        <Box background="info">
            <div className="columns">
                <div className="column is-half">
                    <BoxContent>
                        <BoxTitle title={title} family={true}/>
                        <BoxParagraph>{description}</BoxParagraph>
                    </BoxContent>
                </div>
                <div className="column is-half">
                    <BoxContent>
                        <BoxImage src={src} alt={alt}/>
                    </BoxContent>
                </div>
            </div>   
        </Box>
    );
}

export default EvenementBox;