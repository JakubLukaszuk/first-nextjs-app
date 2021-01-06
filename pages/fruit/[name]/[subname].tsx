import { useRouter } from 'next/router';

export default function FruitName ()
{
    const router = useRouter();
    console.log(router);

    const goHome = () => {
        router.push('/');
    }

    return <h1>
        Hello2  {router.query.name}/{router.query.subname}
        <button onClick={goHome}>HOME</button>
        </h1>
}