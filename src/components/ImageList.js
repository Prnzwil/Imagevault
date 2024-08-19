import React from "react";
import "./style.css";

var imagesLength, imagesHalf, imagesQuarter, imagesThreeQuarter, firstColumn, secondColumn, thirdColumn, fourthColumn;
var imagesSubThree, imagesSubTwo, imagesSubOne;
const ImageList = (props) => {
    var images = props.images.map( (image) => {
        return <img src= {image.webformatURL} key= {image.id} alt= "Image"/>
    })
    
    imagesLength = images.length;
    imagesHalf = imagesLength / 2;
    imagesQuarter = imagesLength / 4;
    imagesThreeQuarter = imagesHalf + imagesQuarter;
    imagesSubThree = imagesLength - 3;
    imagesSubTwo = imagesLength - 2;
    imagesSubOne = imagesLength - 1;
    
    // if (images != []) {
        //     document
    // }

    if (imagesLength % 4 === 0) {
        firstColumn = images.slice(0, imagesQuarter);
        secondColumn = images.slice(imagesQuarter, imagesHalf);
        thirdColumn = images.slice(imagesHalf, imagesThreeQuarter);
        fourthColumn = images.slice(imagesThreeQuarter, imagesLength);
    }

    else if (imagesLength === 1) {
        firstColumn = images[0];
    }

    else if (imagesLength === 2) {
        firstColumn = images[0];
        secondColumn = images[1];
    }

    else if (imagesLength === 3) {
        firstColumn = images[0];
        secondColumn = images[1];
        thirdColumn = images[2];
    }

    else if (imagesLength % 4 === 1 && !(imagesLength === 1)) {
        firstColumn = images.slice(0, imagesSubOne / 4);
        firstColumn.push(images[imagesSubOne]);

        secondColumn = images.slice(imagesSubOne / 4, imagesSubOne / 2);
        thirdColumn = images.slice(imagesSubOne / 2, imagesSubOne / 4 + imagesSubOne / 2);
        fourthColumn = images.slice(imagesSubOne / 4 + imagesSubOne / 2, imagesSubOne);
    }

    else if (imagesLength % 4 === 2 && !(imagesLength === 2)) {
        firstColumn = images.slice(0, imagesSubTwo / 4);
        firstColumn.push(images[imagesSubTwo]);

        secondColumn = images.slice(imagesSubTwo / 4, imagesSubTwo / 2);
        secondColumn.push(images[imagesSubTwo + 1]);

        thirdColumn = images.slice(imagesSubTwo / 2, imagesSubTwo / 4 + imagesSubTwo / 2);
        fourthColumn = images.slice(imagesSubTwo / 4 + imagesSubTwo / 2, imagesSubTwo);
    }

    else if (imagesLength % 4 === 3 && !(imagesLength === 3)) {
        firstColumn = images.slice(0, imagesSubThree / 4);
        firstColumn.push(images[imagesSubThree]);

        secondColumn = images.slice(imagesSubThree / 4, imagesSubThree / 2);
        secondColumn.push(images[imagesSubThree + 1]);

        thirdColumn = images.slice(imagesSubThree / 2, imagesSubThree / 4 + imagesSubThree / 2);
        thirdColumn.push(images[imagesSubThree + 2]);

        fourthColumn = images.slice(imagesSubThree / 4 + imagesSubThree / 2, imagesSubThree);
    }

    return(
        <div id="rootReplaced" > 
            <div class="column">
                {firstColumn}
            </div>
            <div class="column">
                {secondColumn}
            </div>
            <div class="column">
                {thirdColumn}
            </div>
            <div class="column">
                {fourthColumn}
            </div>
        </div>
    )
}

export default ImageList;

