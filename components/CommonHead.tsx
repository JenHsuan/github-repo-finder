import React, {useEffect} from 'react'
import Head from 'next/head';
import PropTypes from 'prop-types'

type CommandHeadProp = {
    title: string;
    url: string;
    description: string;
    keywords: string;
}

const CommonHead: React.FC<CommandHeadProp> = ({title, url, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:image" content="https://raw.githubusercontent.com/JenHsuan/github-repo-finder/master/screen-shot/cover.png"/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)"/>
        </Head>
    )
}

CommonHead.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired
}

export default CommonHead
