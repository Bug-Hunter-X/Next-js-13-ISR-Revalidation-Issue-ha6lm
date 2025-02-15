```javascript
// pages/index.js
import Link from 'next/link';

export async function getStaticProps() {
  // Fetch data here (e.g., from a database or API)
  //Simulate data fetching
  const data = { message: 'Hello from ISR!' };
  return {
    props: { data },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Welcome to my Next.js app - {data.message}</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
export async function getStaticProps() {
  // Fetch data here (e.g., from a database or API)
  //Simulate data fetching
  const data = { message: 'About Page using ISR' };
  return {
    props: { data },
    revalidate: 10, //revalidate every 10 seconds
  };
}

function About({data}) {
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default About;
```