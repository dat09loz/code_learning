'use client';

import Link from "next/link" //navigating pages
import Image from "next/image" //optimise images
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react' //handle signin and signout

const Nav = () => {
  const { data: session } = useSession();

  const [ providers, setProviders ] = useState(null);
  const [ toggleDropdown, setToggleDropdown ] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })(); // immidiately invoked function expression
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image width={30} height={30} src='/assets/images/logo.svg' alt="PromptLib Logo" />
        <p className="logo_text">
          PromptLib
        </p>
      </Link>

      {/*Desktop Navigation*/}
      <div className="sm:flex hidden">
        {session?.user ? ( //logged in 
          <div className="flex gap-3 md:gap-5">
            <Link href='/create-prompt' className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href='/profile'>
              <Image width={37} height={37} src={session?.user.image} className="rounded-full" alt="profile" />
            </Link>
          </div>
        ) : ( //not logged in
          <>
            {providers && Object.values(providers).map(provider => (
              <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

      {/*Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {session?.user ? (// logged in user
          <div className="flex">
            <Image width={37} height={37} src={session?.user.image} className="rounded-full" alt="profile" onClick={() => {setToggleDropdown(prev => !prev)}} onBlur={() => setToggleDropdown(prev => !prev)}/>
            {toggleDropdown && ( //dropdown menu
              <div className="dropdown">
                <Link href='/profile' className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link href='/create-prompt' className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button type="button" className="mt-5 w-full black_btn" onClick={() => {
                  setToggleDropdown(false) 
                  signOut()
                }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>

          
        ) : (
          <>
            {providers && Object.values(providers).map(provider => (
              <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav