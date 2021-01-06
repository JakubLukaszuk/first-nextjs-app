import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import path from 'path'
import React from 'react'

// EXECUTION ON SERVER
export const getStaticProps: GetStaticProps = async (context) => {
    const fs = require('fs');
    return {
        //revalidate try to rebuild page if props changed
        revalidate: 10,
        props: {
        favNumber: Math.random()
    }};
}

// getStaticProps runs at BUILD TIME. It doses NOT RUN AT RUNTIME

//start
// localhost:3000/statucPath/hello -> take out the output -> store it on the disl
// localhost:3000/statucPath/hello2 -> take out the output -> store it on the disl
//Done
export const getStaticPath: GetStaticPaths = async() => {
    return{
        paths: [{params: {name: "hello"}}, {params: {name: "hello2"}}],
        //only paths specided
        fallback: false
    }
}

const dynamic = (props) => {
    const router = useRouter();
    
    if(router.isFallback)
    {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            Dybamic {props.favNumber}
        </div>
    )
}

export default dynamic
