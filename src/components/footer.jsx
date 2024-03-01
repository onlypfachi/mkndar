import React from 'react';
// import { TEInput, TERipple } from 'tw-elements-react';

export default function Footer() {
    return (
        <footer className="bg-secondary-100 text-center dark:bg-secondary-600 w-full border-t border-gray-200">
            {/* <!--Sign-up form section--> */}
            <div className="px-6 pt-6">
                <form action="">
                    <div
                        className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3 ">
                        <div className="md:mb-6 md:ml-auto">
                            <p className="text-secondary-800 dark:text-secondary-200 mt-4">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div className="relative md:mb-6 h-12">
                            <input type="text"
                              id="exampleFormControlInput1"
                                label="Email address"
                                className='w-full h-12 bg-blue p-5 mt-3' placeholder="Enter your email address"
                            ></input>
                        </div>

                        <div className="mb-6 md:mr-auto">
                            <div rippleColor="light">
                                <button
                                    type="button"
                                    className="inline-block rounded mt-5 bg-sky-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
                © 2024 Copyright:
                <a
                    className="text-secondary-800 dark:text-secondary-400"
                    href="/"
                > <strong>Mukunda</strong></a>
            </div>
        </footer>
    );
}