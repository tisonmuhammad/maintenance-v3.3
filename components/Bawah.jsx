import React from 'react'
// import Styles from './layout.module.css';
import Image from 'next/image'

export default function Bawah(props) {
    // const posts = props.posts;
    const styles = {
        // "bawah": "bawah",
        // "Container": "Container",
        // "Row": "Row",
        "kol0": "Col",
        "kolxxl3": "Col--xxl-3",
        "kolxl4": "Col--xl-4",
        "kollg5": "Col--lg-5",
        "kolmd6": "Col--md-6",
        "kolsMd8": "Col--sMd-8",
        "kolsm9": "Col--sm-9",
        "kol11": "Col--11",
    }
    return (
        <footer className="bawah">
            <div className="Container">
                <div className="Row">
                    <div className={`${styles["kol0"]} ${styles["kolxxl3"]} ${styles["kolxl4"]} ${styles["kollg5"]} ${styles["kolmd6"]} ${styles["kolsMd8"]} ${styles["kolsm9"]} ${styles["kol11"]}`}>
                        <div styles="margin-top:30px;"></div>
                        {/* <Image className='logoFooter' src="/logo-fm-bg-white.png" alt="First Media Logo" width={62.75} height={40} /> */}
                        <hr className="line" />
                        <p className="textCopyright">
                            Copyright ©
                            <span>2022</span>
                            PT Link Net Tbk - FIRST MEDIA.
                            <br/>
                            <br/>First Media is a registered trademark of PT Link Net Tbk. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

