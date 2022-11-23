import React from 'react'
import Image from 'next/image'

export default function Navbar(props) {
    // const posts = props.posts;
    return (
        <Image className='logoheader' src="/logo-fm-bg-white.png" alt="First Media Logo" width={62.75} height={40} />
    )
}

// import fsPromises from 'fs/ ';
// import path from 'path'
// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), 'json');
//     const jsonData = await fsPromises.readFile(filePath + '/datathemes.json', 'utf8');
//     const objectData = JSON.parse(jsonData);

//     return {
//         props: objectData
//     }
// }