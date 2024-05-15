// pages/index.js
import Head from 'next/head'
import Image from 'next/image'

export default function Home(props) {
    const posts = props.posts;
    const styles = {
        "conten": "Container",
        "conten2": "ContainerBody",
        "row1": "Row",
        "row2": "RowBody",
        "kol0": "Col",
        "kolmd5": "Col--md-5",
        "kol12": "Col--12",
        "h1": "h1",
        "h1a": "heading1"
    }
    return (
        <div>
            <Head>
                <title>First Media</title>
            </Head>
            
            <div className='contenBody'>
                <div className='kontentv'></div>
                <div className='routerFM'></div>
                <div className='stbFM'></div>
                <div className={`${styles["conten"]} ${styles["conten2"]}`}>
                    <div className={`${styles["row1"]} ${styles["row2"]}`}>
                        <div className={`${styles["kol0"]} ${styles["kol12"]} ${styles["kolmd5"]}`}>
                            {posts.map(post =>
                            <div
                                key={post.id}
                                className="wordingBody">
                                <h1 className={`${styles["h1"]} ${styles["heading1"]}`}>
                                    <Image className='emojiRoket' src="/emojiHammer.png" alt="Maintenance First Media" width={60} height={60} /> {post.heading}
                                </h1>
                                <div className='decs1' dangerouslySetInnerHTML={{ __html:post.subheading}} />
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// // Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'json');
    const jsonData = await fsPromises.readFile(filePath + '/data.json', 'utf8');
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}

// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req, res) {
//     //Find the absolute path of the json directory
//     const jsonDirectory = path.join(process.cwd(), 'json');
//     //Read the json data file data.json
//     const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
//     //Return the content of the data file in json format
//     res.status(200).json(fileContents);
// }
// komen baru