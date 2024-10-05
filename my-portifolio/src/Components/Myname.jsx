import React from "react";
import Typewriter from 'typewriter-effect';

const Myname = () => {
    const name = "< Franciene Vaz />";

    return(
        <div>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings: name
                }}           
            />
        </div>
    );
}

export default Myname;