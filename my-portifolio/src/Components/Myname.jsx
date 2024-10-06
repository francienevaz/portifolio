import React from "react";
import Typewriter from 'typewriter-effect';
import '../Styles/Myname.css'

const Myname = () => {
    const name = "< Franciene Vaz />";

    return(
        <div className="myname">
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