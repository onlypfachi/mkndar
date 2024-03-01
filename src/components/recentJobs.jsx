import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'


const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote', offer: '$120k &ndash; $140k', closingDate: 'Closing on January 9, 2020' },
]

export default function RecentJobs() {
    return (
        <section className="px-4 py-3 sm:px-6 bg-red-100">
        <h3 className="text-2xl font-bold text-gray-900">Recently uploaded jobs</h3>
        <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                
                        <div className="lg:flex lg:items-center lg:justify-between flex-row  ml-10px h-48 w-full p-16 justify-items-center col-start-1 col-span-8 " >
                            <div className="min-w-0 flex-1">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    {item.title}
                                </h2>
                                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.type}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.location}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.offer}
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.closingDate}
                                    </div>

                                </div>
                                <h4 className="text-xl leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight">
                                    From cloud engineers to developers to security pros, the battle for the best IT talent wages. Heres <br/> what to look for (and what to offer) when hiring <br/> for the 15 most in-demand IT jobs for 2024.
                                </h4>
                            </div>
                            <div className="mt-5 flex lg:ml-4 lg:mt-0">

                                <span className="ml-3 hidden sm:block hover:bg-sky-700">
                                    <a href='https://www.tadiwapfachi.dev' className="hover:text-white hover:border-gray-300 hover:bg-sky-700">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:border-gray-300 hover:bg-sky-700"
                                        >
                                            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            Learn more
                                        </button>
                                    </a>
                                </span>

                            </div>
                        </div>
                    )
                )}
            </div>


        </section>
    )
}
