import Link from 'next/link';

export default function Button({ children, href, TailwindStyles }) {

  return (
    <Link href={href}>
    <a className={`button ${TailwindStyles}`}>
      <div className='button-up'>
        <div className='button-text'>{children}</div>
      </div>
      <div className='button-down'>
        <div className='button-text'></div>
      </div>
    </a>
  </Link>
  );
}