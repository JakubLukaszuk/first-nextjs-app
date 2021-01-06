import { GetServerSideProps, GetStaticProps } from 'next';
import path from 'path'
import React from 'react'

// EXECUTION ON SERVER
export const getStaticProps: GetStaticProps = async (context) => {
    const fs = require('fs');
    const txt = fs.readFileSync(path.join(process.cwd(),'public/example.txt'), 'utf-8');
    return {
        //revalidate try to rebuild page if props changed
        revalidate: 10,
        props: {
        favNumber: txt
    }};
}
// EXECUTION ON SERVER
//RUN ALWAYS ON EVERY PAGE
//SLOWER THAN OTHERS
export const getServerSideProps: GetServerSideProps = async (context) =>{
    return {
        //revalidate try to rebuild page if props changed
        revalidate: 10,
        props: {
        favNumber: 5
    }};
}

const dynamic = (props) => {
    return (
        <div>
            Dybamic {props.favNumber}
        </div>
    )
}

export default dynamic
